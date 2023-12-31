export interface ServerPromiseResp<T = undefined> {
	errorMsg?: string;
	status: 'ok' | 'error' | undefined;
	data?: T;
}

export interface Group<T = undefined> {
	name: string;
	members: [];
}
