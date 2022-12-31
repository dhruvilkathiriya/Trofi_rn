export interface AlertState {
  success?: boolean;
  title?: string;
  message: string;
}

export type VersionState =
  | 'UPDATED'
  | 'NEED_UPDATE'
  | 'NEED_FORCE_UPDATE'
  | 'SKIP';

export interface LogoutPromptState {
  enabled: boolean;
  title: string;
  description: string;
}

export interface AppState {
  loading: boolean;
  alert: AlertState | null;
  toggle: boolean;
  meToggle: boolean;
  routeName: string | null;
  versionStatus: VersionState;
  logoutPrompt: LogoutPromptState | null;
}
