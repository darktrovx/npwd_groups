export interface ServerPromiseResp<T = undefined> {
	errorMsg?: string;
	status: 'ok' | 'error' | undefined;
	data?: T;
}

export interface Group<T = undefined> {
	name: string;
	members: [];
}

export interface GroupMember {
	name: string;
	id: number;
	isOwner: boolean;
}

export interface Request {
	id: number;
	name: string;
}

export interface Task {
	step: number;
	steps: object[];
}
