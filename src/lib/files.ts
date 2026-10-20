import { existsSync } from 'node:fs';
import { join } from 'node:path';

/** True when a file has been added to /public, checked at build time: hasPublicFile('/documents/prospectus.pdf'). */
export const hasPublicFile = (path: string) => existsSync(join(process.cwd(), 'public', path));
