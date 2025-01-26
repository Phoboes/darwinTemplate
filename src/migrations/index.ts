import * as migration_20250126_092725 from './20250126_092725';
import * as migration_20250126_100957 from './20250126_100957';

export const migrations = [
  {
    up: migration_20250126_092725.up,
    down: migration_20250126_092725.down,
    name: '20250126_092725',
  },
  {
    up: migration_20250126_100957.up,
    down: migration_20250126_100957.down,
    name: '20250126_100957'
  },
];
