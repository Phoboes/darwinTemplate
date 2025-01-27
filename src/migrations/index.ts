import * as migration_20250126_114852 from './20250126_114852';
import * as migration_20250126_235202 from './20250126_235202';

export const migrations = [
  {
    up: migration_20250126_114852.up,
    down: migration_20250126_114852.down,
    name: '20250126_114852',
  },
  {
    up: migration_20250126_235202.up,
    down: migration_20250126_235202.down,
    name: '20250126_235202'
  },
];
