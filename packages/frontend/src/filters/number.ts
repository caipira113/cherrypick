/*
 * SPDX-FileCopyrightText: syuilo and other misskey, cherrypick contributors
 * SPDX-License-Identifier: AGPL-3.0-only
 */

import { numberFormat } from '@/scripts/intl-const';

export default n => n == null ? 'N/A' : numberFormat.format(n);
