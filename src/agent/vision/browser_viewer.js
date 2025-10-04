import settings from '../settings.js';
import prismarineViewer from 'prismarine-viewer';
const mineflayerViewer = prismarineViewer.mineflayer;

export function addBrowserViewer(bot, count_id) {
    if (!settings.render_bot_view) return;

    const basePort = typeof settings.render_bot_view_base_port === 'number'
        ? settings.render_bot_view_base_port
        : 3000;

    mineflayerViewer(bot, { port: basePort + count_id, firstPerson: true });
}