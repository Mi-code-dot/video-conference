import { Parties } from "./parties.enum";
import { Roles } from "./role.enun";

export interface ParticipantType {
    id: number;
    name: string;
    role: Roles;
    party: Parties;
    imgUrl: string;
    isMuted: boolean;
  
  }