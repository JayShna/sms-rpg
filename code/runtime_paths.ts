import { homedir } from 'node:os';
import { dirname, isAbsolute, join, resolve } from 'node:path';

const PACKAGE_ROOT = resolve(__dirname, "..");
const DEFAULT_DATA_ROOT = join(PACKAGE_ROOT, ".sms-rpg-data");

function uniquePaths(paths: Array<string | undefined>): string[] {
  const seen = new Set<string>();
  const result: string[] = [];

  for (const value of paths) {
    const normalized = value?.trim();
    if (!normalized || seen.has(normalized)) {
      continue;
    }

    seen.add(normalized);
    result.push(normalized);
  }

  return result;
}

export function getPackageRoot(): string {
  return PACKAGE_ROOT;
}

export function resolvePackagePath(filePath: string): string {
  if (isAbsolute(filePath)) {
    return filePath;
  }

  return join(PACKAGE_ROOT, filePath);
}

export function getPromptPath(fileName: string): string {
  return join(PACKAGE_ROOT, "prompts", fileName);
}

function buildAncestorPaths(start: string | undefined): string[] {
  const normalized = start?.trim();
  if (!normalized) {
    return [];
  }

  const result: string[] = [];
  let current = resolve(normalized);

  while (true) {
    result.push(current);
    const parent = dirname(current);
    if (parent === current) {
      break;
    }
    current = parent;
  }

  return result;
}

export function getWorkspaceRootCandidates(): string[] {
  return uniquePaths([
    process.env.OPENCLAW_WORKSPACE,
    process.env.OPENCLAW_AGENT_WORKSPACE,
    process.env.WORKSPACE_ROOT,
    process.cwd(),
    ...buildAncestorPaths(process.cwd()),
    PACKAGE_ROOT,
    ...buildAncestorPaths(PACKAGE_ROOT),
    join(homedir(), ".openclaw", "workspace")
  ]);
}

export function getMemoryFileCandidates(): string[] {
  const fileNames = ["MEMORY.md", "memory.md"];
  const candidates: string[] = [];

  for (const root of getWorkspaceRootCandidates()) {
    for (const fileName of fileNames) {
      candidates.push(join(root, fileName));
    }
  }

  return uniquePaths(candidates);
}

export function getDataRootCandidates(includeLegacyAiCreator = false): string[] {
  return uniquePaths([
    process.env.SMS_DATA_DIR,
    process.env.OPENCLAW_SMS_DATA_DIR,
    process.env.OPENCLAW_DATA_DIR,
    DEFAULT_DATA_ROOT,
    includeLegacyAiCreator ? join(homedir(), ".config", "ai-creator-world-seed") : undefined,
    join(homedir(), ".config", "sms-generate-cli"),
    join(process.cwd(), ".sms-generate-cli")
  ]);
}
