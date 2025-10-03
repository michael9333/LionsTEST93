import { Formation, Game } from "../types";
const FORMATIONS_KEY = "playbook_formations_v1";
const GAMES_KEY = "playbook_games_v1";
function safeParse<T>(raw: string | null, fallback: T): T { if (!raw) return fallback; try { return JSON.parse(raw); } catch { return fallback; } }
export function loadFormations(): Formation[] { return safeParse<Formation[]>(localStorage.getItem(FORMATIONS_KEY), []); }
export function loadGames(): Game[] { return safeParse<Game[]>(localStorage.getItem(GAMES_KEY), []); }
export function saveFormations(f: Formation[]) { localStorage.setItem(FORMATIONS_KEY, JSON.stringify(f)); }
export function saveGames(g: Game[]) { localStorage.setItem(GAMES_KEY, JSON.stringify(g)); }
export function exportToJson(data: unknown) { const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" }); const url = URL.createObjectURL(blob); const a = document.createElement("a"); a.download = "playbook-data.json"; a.href = url; a.click(); URL.revokeObjectURL(url); }
export function importFromJson(file: File): Promise<any> { return new Promise((resolve, reject) => { const fr = new FileReader(); fr.onload = () => { try { resolve(JSON.parse(fr.result as string)); } catch (e) { reject(e); } }; fr.onerror = () => reject(fr.error); fr.readAsText(file, "utf-8"); }); }