import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export function useCreateSubscriber() {
  const { toast } = useToast();
  const [isPending, setIsPending] = useState(false);

  const mutate = (_data: { email: string }, options?: { onSuccess?: () => void }) => {
    setIsPending(true);
    setTimeout(() => {
      setIsPending(false);
      toast({
        title: "You're on the list!",
        description: "We'll let you know when Amplify launches.",
        variant: "default",
      });
      options?.onSuccess?.();
    }, 600);
  };

  return { mutate, isPending };
}
