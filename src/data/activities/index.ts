import type { ActivityContent } from "../../types/activity";

import { av01, av02, av03, av04, av05 } from "./audiovisual";
import { gd01, gd02, gd03, gd04, gd05 } from "./graphicDesign";
import { wd01, wd02, wd03, wd04, wd05 } from "./webDesign";

import {
    activity3d01,
    activity3d02,
    activity3d03,
    activity3d04,
    activity3d05,
} from "./design3D";

export const activityContents: ActivityContent[] = [
  gd01,
  gd02,
  gd03,
  gd04,
  gd05,

  wd01,
  wd02,
  wd03,
  wd04,
  wd05,

  av01,
  av02,
  av03,
  av04,
  av05,

  activity3d01,
  activity3d02,
  activity3d03,
  activity3d04,
  activity3d05,
];
