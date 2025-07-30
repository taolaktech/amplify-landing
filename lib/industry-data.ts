export interface IndustryData {
  name: string
  channels: {
    facebook: ChannelData
    instagram: ChannelData
    google: ChannelData
  }
}

export interface ChannelData {
  averageRoas: number
  averageCpc: number
  conversionRate: number
  averageCtr: number
}

export const industryData: IndustryData[] = [
  {
    name: "Fashion & Apparel",
    channels: {
      facebook: { averageRoas: 4.2, averageCpc: 1.85, conversionRate: 2.8, averageCtr: 1.2 },
      instagram: { averageRoas: 4.8, averageCpc: 2.1, conversionRate: 3.2, averageCtr: 1.8 },
      google: { averageRoas: 5.5, averageCpc: 2.45, conversionRate: 4.1, averageCtr: 3.2 },
    },
  },
  {
    name: "Beauty & Cosmetics",
    channels: {
      facebook: { averageRoas: 4.5, averageCpc: 2.2, conversionRate: 3.1, averageCtr: 1.4 },
      instagram: { averageRoas: 5.2, averageCpc: 2.5, conversionRate: 3.8, averageCtr: 2.1 },
      google: { averageRoas: 5.8, averageCpc: 2.85, conversionRate: 4.5, averageCtr: 3.5 },
    },
  },
  {
    name: "Electronics",
    channels: {
      facebook: { averageRoas: 3.8, averageCpc: 2.15, conversionRate: 2.2, averageCtr: 1.1 },
      instagram: { averageRoas: 4.1, averageCpc: 2.4, conversionRate: 2.5, averageCtr: 1.3 },
      google: { averageRoas: 6.2, averageCpc: 3.2, conversionRate: 3.8, averageCtr: 4.1 },
    },
  },
  {
    name: "Home & Garden",
    channels: {
      facebook: { averageRoas: 4.0, averageCpc: 1.95, conversionRate: 2.5, averageCtr: 1.0 },
      instagram: { averageRoas: 4.3, averageCpc: 2.15, conversionRate: 2.8, averageCtr: 1.5 },
      google: { averageRoas: 5.1, averageCpc: 2.65, conversionRate: 3.5, averageCtr: 3.0 },
    },
  },
  {
    name: "Health & Wellness",
    channels: {
      facebook: { averageRoas: 4.3, averageCpc: 2.35, conversionRate: 2.9, averageCtr: 1.3 },
      instagram: { averageRoas: 4.9, averageCpc: 2.6, conversionRate: 3.4, averageCtr: 1.9 },
      google: { averageRoas: 5.7, averageCpc: 3.1, conversionRate: 4.2, averageCtr: 3.8 },
    },
  },
  {
    name: "Sports & Fitness",
    channels: {
      facebook: { averageRoas: 4.1, averageCpc: 2.05, conversionRate: 2.7, averageCtr: 1.2 },
      instagram: { averageRoas: 4.7, averageCpc: 2.3, conversionRate: 3.1, averageCtr: 1.7 },
      google: { averageRoas: 5.3, averageCpc: 2.75, conversionRate: 3.9, averageCtr: 3.3 },
    },
  },
  {
    name: "Food & Beverage",
    channels: {
      facebook: { averageRoas: 3.9, averageCpc: 1.75, conversionRate: 2.4, averageCtr: 1.1 },
      instagram: { averageRoas: 4.4, averageCpc: 2.0, conversionRate: 2.9, averageCtr: 1.6 },
      google: { averageRoas: 4.8, averageCpc: 2.35, conversionRate: 3.2, averageCtr: 2.8 },
    },
  },
  {
    name: "Jewelry & Accessories",
    channels: {
      facebook: { averageRoas: 4.6, averageCpc: 2.45, conversionRate: 3.2, averageCtr: 1.4 },
      instagram: { averageRoas: 5.3, averageCpc: 2.75, conversionRate: 3.9, averageCtr: 2.2 },
      google: { averageRoas: 5.9, averageCpc: 3.15, conversionRate: 4.6, averageCtr: 3.7 },
    },
  },
  {
    name: "Pet Supplies",
    channels: {
      facebook: { averageRoas: 4.2, averageCpc: 1.9, conversionRate: 2.8, averageCtr: 1.3 },
      instagram: { averageRoas: 4.8, averageCpc: 2.2, conversionRate: 3.3, averageCtr: 1.8 },
      google: { averageRoas: 5.4, averageCpc: 2.6, conversionRate: 4.0, averageCtr: 3.4 },
    },
  },
  {
    name: "Baby & Kids",
    channels: {
      facebook: { averageRoas: 4.4, averageCpc: 2.1, conversionRate: 3.0, averageCtr: 1.3 },
      instagram: { averageRoas: 5.0, averageCpc: 2.4, conversionRate: 3.6, averageCtr: 1.9 },
      google: { averageRoas: 5.6, averageCpc: 2.8, conversionRate: 4.3, averageCtr: 3.6 },
    },
  },
  {
    name: "Automotive",
    channels: {
      facebook: { averageRoas: 3.5, averageCpc: 2.85, conversionRate: 1.8, averageCtr: 0.9 },
      instagram: { averageRoas: 3.8, averageCpc: 3.1, conversionRate: 2.1, averageCtr: 1.1 },
      google: { averageRoas: 5.8, averageCpc: 4.2, conversionRate: 3.2, averageCtr: 3.9 },
    },
  },
  {
    name: "Books & Education",
    channels: {
      facebook: { averageRoas: 3.7, averageCpc: 1.65, conversionRate: 2.3, averageCtr: 1.0 },
      instagram: { averageRoas: 4.0, averageCpc: 1.85, conversionRate: 2.6, averageCtr: 1.4 },
      google: { averageRoas: 4.9, averageCpc: 2.25, conversionRate: 3.4, averageCtr: 2.9 },
    },
  },
  {
    name: "Travel & Tourism",
    channels: {
      facebook: { averageRoas: 3.2, averageCpc: 2.95, conversionRate: 1.6, averageCtr: 0.8 },
      instagram: { averageRoas: 3.6, averageCpc: 3.25, conversionRate: 1.9, averageCtr: 1.2 },
      google: { averageRoas: 4.8, averageCpc: 4.15, conversionRate: 2.8, averageCtr: 3.1 },
    },
  },
  {
    name: "Real Estate",
    channels: {
      facebook: { averageRoas: 2.8, averageCpc: 3.45, conversionRate: 1.2, averageCtr: 0.7 },
      instagram: { averageRoas: 3.1, averageCpc: 3.75, conversionRate: 1.4, averageCtr: 0.9 },
      google: { averageRoas: 4.2, averageCpc: 5.2, conversionRate: 2.1, averageCtr: 2.8 },
    },
  },
  {
    name: "Software & SaaS",
    channels: {
      facebook: { averageRoas: 3.9, averageCpc: 3.85, conversionRate: 2.1, averageCtr: 1.1 },
      instagram: { averageRoas: 4.2, averageCpc: 4.15, conversionRate: 2.4, averageCtr: 1.3 },
      google: { averageRoas: 6.5, averageCpc: 5.75, conversionRate: 3.8, averageCtr: 4.2 },
    },
  },
  {
    name: "Arts & Crafts",
    channels: {
      facebook: { averageRoas: 4.3, averageCpc: 1.85, conversionRate: 2.9, averageCtr: 1.2 },
      instagram: { averageRoas: 5.1, averageCpc: 2.15, conversionRate: 3.5, averageCtr: 2.0 },
      google: { averageRoas: 5.2, averageCpc: 2.45, conversionRate: 3.7, averageCtr: 3.1 },
    },
  },
  {
    name: "Music & Entertainment",
    channels: {
      facebook: { averageRoas: 3.6, averageCpc: 2.25, conversionRate: 2.0, averageCtr: 1.0 },
      instagram: { averageRoas: 4.2, averageCpc: 2.55, conversionRate: 2.5, averageCtr: 1.6 },
      google: { averageRoas: 4.7, averageCpc: 2.95, conversionRate: 3.1, averageCtr: 2.7 },
    },
  },
  {
    name: "Industrial & B2B",
    channels: {
      facebook: { averageRoas: 3.1, averageCpc: 3.25, conversionRate: 1.5, averageCtr: 0.8 },
      instagram: { averageRoas: 3.3, averageCpc: 3.55, conversionRate: 1.7, averageCtr: 1.0 },
      google: { averageRoas: 5.2, averageCpc: 4.85, conversionRate: 2.9, averageCtr: 3.5 },
    },
  },
  {
    name: "Luxury Goods",
    channels: {
      facebook: { averageRoas: 4.8, averageCpc: 3.15, conversionRate: 3.4, averageCtr: 1.5 },
      instagram: { averageRoas: 5.6, averageCpc: 3.65, conversionRate: 4.2, averageCtr: 2.3 },
      google: { averageRoas: 6.2, averageCpc: 4.25, conversionRate: 4.8, averageCtr: 3.9 },
    },
  },
  {
    name: "Gaming & Toys",
    channels: {
      facebook: { averageRoas: 4.0, averageCpc: 2.35, conversionRate: 2.6, averageCtr: 1.2 },
      instagram: { averageRoas: 4.5, averageCpc: 2.65, conversionRate: 3.0, averageCtr: 1.7 },
      google: { averageRoas: 5.1, averageCpc: 3.05, conversionRate: 3.6, averageCtr: 3.2 },
    },
  },
]

export function getChannelData(industryName: string, channel: "facebook" | "instagram" | "google"): ChannelData | null {
  const industry = industryData.find((ind) => ind.name === industryName)
  return industry ? industry.channels[channel] : null
}

export function getChannelOptions() {
  return [
    { value: "facebook", label: "Facebook", icon: "📘" },
    { value: "instagram", label: "Instagram", icon: "📷" },
    { value: "google", label: "Google Search", icon: "🔍" },
  ]
}
