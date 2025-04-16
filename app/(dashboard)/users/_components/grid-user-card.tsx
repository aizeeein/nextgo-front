import { TrashIcon, User2Icon } from "lucide-react";
import { Button } from "../../../../components/ui/button";
import { User } from "@/types/user";

interface GridUserCardProps {
  user: User;
  index: number;
  onDelete: (id: string) => void;
}

function GridUserCard({ user, index, onDelete }: GridUserCardProps) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onDelete(user.id);
  };

  return (
    <div className="feature-card p-4 border rounded shadow">
      <div className="feature-icon-wrapper flex flex-row mb-4 justify-between">
        <User2Icon className="h-5 w-5" />
        <Button
          onClick={handleClick}
          className="border-2 border-amber-200 p-1 bg-rose-500/40 rounded-lg"
        >
          <TrashIcon className="h-6 w-6 text-destructive" />
        </Button>
      </div>
      <h3 className="text-xl font-semibold mb-2">{user.name}</h3>
      <p className="text-muted-foreground">{user.email}</p>
    </div>
  );
}

export default GridUserCard;
