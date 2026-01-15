import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoId: string;
  isShort?: boolean;
}

export function VideoModal({ isOpen, onClose, videoId, isShort = false }: VideoModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className={`p-0 border-0 bg-black ${isShort ? 'max-w-[400px]' : 'max-w-4xl'}`} aria-describedby={undefined}>
        <VisuallyHidden>
          <DialogTitle>Video Player</DialogTitle>
        </VisuallyHidden>
        <div className={`${isShort ? 'aspect-[9/16]' : 'aspect-video'} w-full`}>
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title="Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
