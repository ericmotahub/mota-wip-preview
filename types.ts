
export enum PortalType {
  FILMMAKERS = 'filmmakers',
  PARTNERS = 'partners',
  CREW = 'crew'
}

export enum ViewType {
  HOME = 'home',
  FILMMAKERS = 'filmmakers',
  PARTNERS = 'partners',
  CREW = 'crew',
  CONTACT = 'contact',
  LOGIN = 'login'
}

// Interface for chat messages used in the AIAssistant component
export interface ChatMessage {
  role: 'user' | 'model';
  content: string;
}
