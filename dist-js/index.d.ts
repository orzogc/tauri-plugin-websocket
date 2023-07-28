export interface MessageKind<T, D> {
    type: T;
    data: D;
}
export interface CloseFrame {
    code: number;
    reason: string;
}
export type Message = MessageKind<"Text", string> | MessageKind<"Binary", number[]> | MessageKind<"Ping", number[]> | MessageKind<"Pong", number[]> | MessageKind<"Close", CloseFrame | null>;
export type ListenerArgument = Message | MessageKind<"Error", string> | null;
export default class WebSocket {
    id: number;
    private readonly listeners;
    constructor(id: number, listeners: Array<(arg: ListenerArgument) => void>);
    static connect(url: string, options?: unknown): Promise<WebSocket>;
    addListener(cb: (arg: ListenerArgument) => void): void;
    send(message: Message | string | number[]): Promise<void>;
    disconnect(): Promise<void>;
}
