/**
 * Created by shearerbeard on 6/16/15.
 */

import Alt = require("alt");
import chromeDebug = require('alt/utils/chromeDebug');

let altInstance = new Alt();

chromeDebug(alt);

export const alt = altInstance;
