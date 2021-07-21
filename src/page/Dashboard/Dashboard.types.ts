import { IUserCreator } from 'components/UserCreator';

export interface IDashboard { userCreatorProps: IUserCreator & { isLoading: boolean } }
