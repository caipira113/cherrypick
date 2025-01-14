/*
 * SPDX-FileCopyrightText: syuilo and other misskey, cherrypick contributors
 * SPDX-License-Identifier: AGPL-3.0-only
 */

import * as os from '@/os';
import { User } from 'cherrypick-js/src/entities';
import { defaultStore } from '@/store';
import { i18n } from '@/i18n';

export async function editNickname(user: User) {
	if (!defaultStore.state.nicknameEnabled) return;
	const { result, canceled } = await os.inputText({
		title: i18n.ts.editNickName,
		placeholder: user.name || user.username,
		default: defaultStore.state.nicknameMap[user.id] ?? null,
	});
	if (canceled) return;
	const newMap = { ...defaultStore.state.nicknameMap };
	if (result) {
		newMap[user.id] = result;
	} else {
		delete newMap[user.id];
	}
	await defaultStore.set('nicknameMap', newMap);
}
