export type Point = { x: number; y: number };
export type Player = { id: number; x: number; y: number; label?: string };
export type LineType = "normal" | "dashed" | "block";
export type Line = { playerId: number; type: LineType; points: Point[] };
export type Motion = { playerId: number; points: Point[] };
export type FreeDrawing = { id: number; playerId?: number; points: Point[] };
export type Annotation = { id: number; x: number; y: number; text: string };
export type DrawingMode = "move" | "write" | "free";
export type Formation = { name: string; players: Player[] };
export type Game = { name: string; players: Player[]; lines: Line[]; motions: Motion[]; freeDrawings: FreeDrawing[]; annotations: Annotation[] };
export type AnimationMode = "routes" | "motions" | "all" | null;
export interface CalculateFramesResult { totalRouteFrames: number; totalMotionFrames: number; totalFrames: number; }
export interface RenderedPlayersResult { renderedPlayers: Player[]; playerRouteTypes: Record<number, string | null>; }