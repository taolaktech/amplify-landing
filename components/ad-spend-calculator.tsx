"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { industryData, getChannelData, getChannelOptions } from "@/lib/industry-data"
import {
  Calculator,
  TrendingUp,
  DollarSign,
  Target,
  Share2,
  Info,
  Calendar,
  RefreshCw,
  RatioIcon as Formula,
} from "lucide-react"
import { toast } from "@/hooks/use-toast"

interface CalculationResults {
  targetCpc: number
  expectedRevenue: number
  expectedOrders: number
  expectedClicks: number
  actualRoas: number
  campaignDays: number
  dailySpend: number
  channelRoas: number
  channelCpc: number
  channelConversionRate: number
  channelCtr: number
}

interface FormulaStep {
  step: string
  formula: string
  calculation: string
  result: string
}

export default function AdSpendCalculator() {
  const [industry, setIndustry] = useState<string>("")
  const [channel, setChannel] = useState<string>("")
  const [aov, setAov] = useState<string>("")
  const [adBudget, setAdBudget] = useState<string>("")
  const [results, setResults] = useState<CalculationResults | null>(null)
  const [formulaSteps, setFormulaSteps] = useState<FormulaStep[]>([])
  const [isCalculating, setIsCalculating] = useState(false)

  const MINIMUM_DAILY_SPEND = 10
  const channelOptions = getChannelOptions()

  // Load parameters from URL on component mount
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const industryParam = urlParams.get("industry")
    const channelParam = urlParams.get("channel")
    const aovParam = urlParams.get("aov")
    const budgetParam = urlParams.get("budget")

    if (industryParam) setIndustry(industryParam)
    if (channelParam) setChannel(channelParam)
    if (aovParam) setAov(aovParam)
    if (budgetParam) setAdBudget(budgetParam)

    // Auto-calculate if all params are present
    if (industryParam && channelParam && aovParam && budgetParam) {
      setTimeout(() => handleCalculate(), 500)
    }
  }, [])

  const selectedChannelData = getChannelData(industry, channel as "facebook" | "instagram" | "google")
  const selectedChannelOption = channelOptions.find((opt) => opt.value === channel)

  const handleCalculate = () => {
    if (!selectedChannelData || !aov || !adBudget) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields to calculate your ad spend.",
        variant: "destructive",
      })
      return
    }

    setIsCalculating(true)

    // Simulate calculation delay for better UX
    setTimeout(() => {
      const aovNum = Number.parseFloat(aov)
      const adBudgetNum = Number.parseFloat(adBudget)

      // Use channel-specific benchmarks
      const channelRoas = selectedChannelData.averageRoas
      const channelCpc = selectedChannelData.averageCpc
      const channelConversionRate = selectedChannelData.conversionRate / 100
      const channelCtr = selectedChannelData.averageCtr

      // Calculate step by step with formulas
      const steps: FormulaStep[] = []

      // Step 1: Expected Clicks
      const expectedClicks = adBudgetNum / channelCpc
      steps.push({
        step: "1. Calculate Expected Clicks",
        formula: "Expected Clicks = Ad Budget ÷ Channel CPC",
        calculation: `${formatCurrency(adBudgetNum)} ÷ ${formatCurrency(channelCpc)}`,
        result: `${formatNumber(expectedClicks)} clicks`,
      })

      // Step 2: Expected Orders
      const expectedOrders = expectedClicks * channelConversionRate
      steps.push({
        step: "2. Calculate Expected Orders",
        formula: "Expected Orders = Expected Clicks × Conversion Rate",
        calculation: `${formatNumber(expectedClicks)} × ${selectedChannelData.conversionRate}%`,
        result: `${formatNumber(expectedOrders)} orders`,
      })

      // Step 3: Expected Revenue
      const expectedRevenue = expectedOrders * aovNum
      steps.push({
        step: "3. Calculate Expected Revenue",
        formula: "Expected Revenue = Expected Orders × AOV",
        calculation: `${formatNumber(expectedOrders)} × ${formatCurrency(aovNum)}`,
        result: `${formatCurrency(expectedRevenue)}`,
      })

      // Step 4: Actual ROAS
      const actualRoas = expectedRevenue / adBudgetNum
      steps.push({
        step: "4. Calculate ROAS",
        formula: "ROAS = Expected Revenue ÷ Ad Budget",
        calculation: `${formatCurrency(expectedRevenue)} ÷ ${formatCurrency(adBudgetNum)}`,
        result: `${actualRoas.toFixed(2)}x`,
      })

      // Step 5: Campaign Duration
      const dailySpend = Math.max(adBudgetNum / 30, MINIMUM_DAILY_SPEND)
      const campaignDays = Math.ceil(adBudgetNum / dailySpend)
      steps.push({
        step: "5. Calculate Campaign Duration",
        formula: "Campaign Days = Ad Budget ÷ Daily Spend",
        calculation: `${formatCurrency(adBudgetNum)} ÷ ${formatCurrency(dailySpend)}`,
        result: `${campaignDays} days`,
      })

      // Target CPC calculation (for reference)
      const targetCpc = channelRoas / (aovNum * channelConversionRate)

      const newResults: CalculationResults = {
        targetCpc,
        expectedRevenue,
        expectedOrders,
        expectedClicks,
        actualRoas,
        campaignDays,
        dailySpend,
        channelRoas,
        channelCpc,
        channelConversionRate: selectedChannelData.conversionRate,
        channelCtr,
      }

      setResults(newResults)
      setFormulaSteps(steps)
      setIsCalculating(false)
    }, 800)
  }

  const handleReset = () => {
    setIndustry("")
    setChannel("")
    setAov("")
    setAdBudget("")
    setResults(null)
    setFormulaSteps([])
  }

  const handleShareResults = () => {
    if (!results) return

    const params = new URLSearchParams({
      industry: industry,
      channel: channel,
      aov: aov,
      budget: adBudget,
    })

    const shareUrl = `${window.location.origin}/ad-spend?${params.toString()}`

    navigator.clipboard.writeText(shareUrl).then(() => {
      toast({
        title: "Link copied!",
        description: "Share this link to show your calculation results.",
      })
    })
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amount)
  }

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat("en-US", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(num)
  }

  const isFormValid = industry && channel && aov && adBudget

  return (
    <TooltipProvider>
      <div className="space-y-6">
        {/* Input Form */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calculator className="h-5 w-5" />
              Ad Spend Calculator
            </CardTitle>
            <CardDescription>
              Enter your business details and advertising channel to calculate performance using channel-specific
              benchmarks
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="space-y-2">
                <Label htmlFor="industry">Industry *</Label>
                <Select value={industry} onValueChange={setIndustry}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your industry" />
                  </SelectTrigger>
                  <SelectContent>
                    {industryData.map((ind) => (
                      <SelectItem key={ind.name} value={ind.name}>
                        {ind.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="channel">Advertising Channel *</Label>
                <Select value={channel} onValueChange={setChannel}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select channel" />
                  </SelectTrigger>
                  <SelectContent>
                    {channelOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        <div className="flex items-center gap-2">
                          <span>{option.icon}</span>
                          {option.label}
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="aov">Average Order Value (AOV) *</Label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    id="aov"
                    type="number"
                    placeholder="75.00"
                    value={aov}
                    onChange={(e) => setAov(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <p className="text-xs text-gray-500">Your store's average order value</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="ad-budget">Ad Budget *</Label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    id="ad-budget"
                    type="number"
                    placeholder="5000"
                    value={adBudget}
                    onChange={(e) => setAdBudget(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <p className="text-xs text-gray-500">Total advertising budget</p>
              </div>
            </div>

            {selectedChannelData && (
              <div className="flex flex-wrap gap-2">
                <Tooltip>
                  <TooltipTrigger>
                    <Badge variant="secondary" className="text-xs">
                      {selectedChannelOption?.icon} {selectedChannelOption?.label}
                    </Badge>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Selected advertising channel</p>
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger>
                    <Badge variant="secondary" className="text-xs">
                      CR: {selectedChannelData.conversionRate}%
                    </Badge>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>
                      Average conversion rate for {selectedChannelOption?.label} in {industry}
                    </p>
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger>
                    <Badge variant="secondary" className="text-xs">
                      ROAS: {selectedChannelData.averageRoas}x
                    </Badge>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>
                      Average ROAS for {selectedChannelOption?.label} in {industry}
                    </p>
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger>
                    <Badge variant="secondary" className="text-xs">
                      CPC: ${selectedChannelData.averageCpc}
                    </Badge>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>
                      Average cost per click for {selectedChannelOption?.label} in {industry}
                    </p>
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger>
                    <Badge variant="secondary" className="text-xs">
                      CTR: {selectedChannelData.averageCtr}%
                    </Badge>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>
                      Average click-through rate for {selectedChannelOption?.label} in {industry}
                    </p>
                  </TooltipContent>
                </Tooltip>
              </div>
            )}

            <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
              <div className="flex items-start gap-2">
                <Info className="h-5 w-5 text-blue-600 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-blue-800">Channel-Specific Benchmarks</h4>
                  <p className="text-sm text-blue-700">
                    {selectedChannelData ? (
                      <>
                        We'll use {selectedChannelOption?.label}'s benchmarks for {industry}:{" "}
                        {selectedChannelData.averageRoas}x ROAS, ${selectedChannelData.averageCpc} CPC, and{" "}
                        {selectedChannelData.conversionRate}% conversion rate.
                      </>
                    ) : (
                      "Select your industry and advertising channel to see specific benchmarks."
                    )}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-3 pt-4">
              <Button
                onClick={handleCalculate}
                disabled={!isFormValid || isCalculating}
                className="flex-1 bg-purple-600 hover:bg-purple-700"
              >
                {isCalculating ? (
                  <>
                    <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                    Calculating...
                  </>
                ) : (
                  <>
                    <Calculator className="h-4 w-4 mr-2" />
                    Calculate Performance
                  </>
                )}
              </Button>
              <Button onClick={handleReset} variant="outline" disabled={isCalculating}>
                Reset
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Results */}
        {results && (
          <Tabs defaultValue="summary" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="summary">Performance Summary</TabsTrigger>
              <TabsTrigger value="formulas">Step-by-Step Formulas</TabsTrigger>
              <TabsTrigger value="detailed">Detailed Analysis</TabsTrigger>
            </TabsList>

            <TabsContent value="summary" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">Expected Revenue</p>
                        <p className="text-2xl font-bold text-green-600">{formatCurrency(results.expectedRevenue)}</p>
                      </div>
                      <DollarSign className="h-8 w-8 text-green-600" />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">Expected ROAS</p>
                        <p className="text-2xl font-bold text-blue-600">{results.actualRoas.toFixed(1)}x</p>
                      </div>
                      <TrendingUp className="h-8 w-8 text-blue-600" />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">Expected Orders</p>
                        <p className="text-2xl font-bold text-purple-600">{formatNumber(results.expectedOrders)}</p>
                      </div>
                      <Target className="h-8 w-8 text-purple-600" />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">Expected Clicks</p>
                        <p className="text-2xl font-bold text-orange-600">{formatNumber(results.expectedClicks)}</p>
                      </div>
                      <Calculator className="h-8 w-8 text-orange-600" />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">Campaign Duration</p>
                        <p className="text-2xl font-bold text-indigo-600">{results.campaignDays} days</p>
                      </div>
                      <Calendar className="h-8 w-8 text-indigo-600" />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">Daily Spend</p>
                        <p className="text-2xl font-bold text-teal-600">{formatCurrency(results.dailySpend)}</p>
                      </div>
                      <DollarSign className="h-8 w-8 text-teal-600" />
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                <div className="flex items-start gap-2">
                  <Info className="h-5 w-5 text-green-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-green-800">
                      {selectedChannelOption?.icon} {selectedChannelOption?.label} Performance Projection
                    </h4>
                    <p className="text-sm text-green-700">
                      Based on {selectedChannelOption?.label} benchmarks for {industry}, your{" "}
                      {formatCurrency(Number.parseFloat(adBudget))} budget is expected to generate{" "}
                      {formatCurrency(results.expectedRevenue)} in revenue over {results.campaignDays} days, achieving a{" "}
                      {results.actualRoas.toFixed(1)}x ROAS.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                <Button onClick={handleShareResults} className="flex items-center gap-2">
                  <Share2 className="h-4 w-4" />
                  Share Results
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="formulas" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Formula className="h-5 w-5" />
                    Step-by-Step Calculation Formulas
                  </CardTitle>
                  <CardDescription>
                    See exactly how we calculated your performance metrics using {selectedChannelOption?.label}{" "}
                    benchmarks
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {formulaSteps.map((step, index) => (
                      <div key={index} className="bg-gray-50 p-4 rounded-lg border-l-4 border-purple-500">
                        <div className="space-y-3">
                          <h4 className="font-semibold text-gray-800">{step.step}</h4>

                          <div className="bg-white p-3 rounded border">
                            <p className="text-sm font-medium text-purple-700 mb-1">Formula:</p>
                            <p className="font-mono text-sm bg-purple-50 p-2 rounded">{step.formula}</p>
                          </div>

                          <div className="bg-white p-3 rounded border">
                            <p className="text-sm font-medium text-blue-700 mb-1">Calculation:</p>
                            <p className="font-mono text-sm bg-blue-50 p-2 rounded">{step.calculation}</p>
                          </div>

                          <div className="bg-white p-3 rounded border">
                            <p className="text-sm font-medium text-green-700 mb-1">Result:</p>
                            <p className="font-semibold text-lg text-green-800">{step.result}</p>
                          </div>
                        </div>
                      </div>
                    ))}

                    <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                      <div className="flex items-start gap-2">
                        <Info className="h-5 w-5 text-blue-600 mt-0.5" />
                        <div>
                          <h4 className="font-semibold text-blue-800">Daily Spend Logic</h4>
                          <div className="text-sm text-blue-700 space-y-1 mt-2">
                            <p>
                              • Recommended daily spend: {formatCurrency(Number.parseFloat(adBudget) / 30)} (budget ÷ 30
                              days)
                            </p>
                            <p>• Minimum daily spend: ${MINIMUM_DAILY_SPEND} (platform requirement)</p>
                            <p>• Actual daily spend: {formatCurrency(results.dailySpend)} (higher of the two)</p>
                            <p>• This ensures your campaigns have sufficient budget to be effective</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="detailed" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Channel-Specific Analysis</CardTitle>
                  <CardDescription>
                    How your performance is calculated using {selectedChannelOption?.label} data for {industry}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Your Inputs:</h4>
                      <ul className="text-sm space-y-1">
                        <li>Industry: {industry}</li>
                        <li>
                          Channel: {selectedChannelOption?.icon} {selectedChannelOption?.label}
                        </li>
                        <li>AOV: {formatCurrency(Number.parseFloat(aov))}</li>
                        <li>Ad Budget: {formatCurrency(Number.parseFloat(adBudget))}</li>
                      </ul>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">{selectedChannelOption?.label} Benchmarks:</h4>
                      <ul className="text-sm space-y-1">
                        <li>Average ROAS: {results.channelRoas}x</li>
                        <li>Average CPC: {formatCurrency(results.channelCpc)}</li>
                        <li>Conversion Rate: {results.channelConversionRate}%</li>
                        <li>Average CTR: {results.channelCtr}%</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                    <div className="flex items-start gap-2">
                      <Info className="h-5 w-5 text-yellow-600 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-yellow-800">Channel-Specific Notes</h4>
                        <ul className="text-sm text-yellow-700 space-y-1 mt-1">
                          <li>
                            • These projections are based on {selectedChannelOption?.label} performance data for{" "}
                            {industry}
                          </li>
                          <li>• Different channels may perform better for your specific products</li>
                          <li>• Consider testing multiple channels to find the best fit</li>
                          <li>• Monitor performance closely and optimize based on actual results</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        )}

        {/* How It Works */}
        <Card>
          <CardHeader>
            <CardTitle>How Channel-Specific Benchmarks Work</CardTitle>
            <CardDescription>
              Understanding how different advertising channels perform across industries
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Channel Performance Differences:</h4>
                <p className="text-sm text-gray-600 mb-2">
                  Each advertising channel has unique characteristics that affect performance. We use channel-specific
                  benchmarks to provide more accurate projections for your chosen platform.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">📘 Facebook</h4>
                  <ul className="text-sm space-y-1 text-gray-600">
                    <li>• Great for broad audience targeting</li>
                    <li>• Strong for brand awareness</li>
                    <li>• Good conversion rates across most industries</li>
                    <li>• Moderate CPC costs</li>
                  </ul>
                </div>

                <div className="bg-pink-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">📷 Instagram</h4>
                  <ul className="text-sm space-y-1 text-gray-600">
                    <li>• Excellent for visual products</li>
                    <li>• Higher engagement rates</li>
                    <li>• Strong performance in lifestyle industries</li>
                    <li>• Slightly higher CPC than Facebook</li>
                  </ul>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">🔍 Google Search</h4>
                  <ul className="text-sm space-y-1 text-gray-600">
                    <li>• High-intent traffic</li>
                    <li>• Better conversion rates</li>
                    <li>• Higher CPC but better quality traffic</li>
                    <li>• Great for product searches</li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Why Channel Selection Matters:</h4>
                <ul className="text-sm space-y-1 text-gray-600">
                  <li>• Different channels have varying costs per click</li>
                  <li>• Conversion rates differ significantly between platforms</li>
                  <li>• Audience behavior varies by channel</li>
                  <li>• Some industries perform better on specific channels</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </TooltipProvider>
  )
}
