#!/usr/bin/env node
/**
 * Minimal screenshot helper for visual comparison.
 * Usage:
 *   node scripts/screenshot.mjs [url-or-path] [name] [--width=1280] [--full]
 *
 * Examples:
 *   node scripts/screenshot.mjs /meditationswissen/
 *   node scripts/screenshot.mjs /meditationswissen/ rebuilt --full
 *   node scripts/screenshot.mjs https://achtsam-bleiben.de/meditationswissen/ original --full
 *   node scripts/screenshot.mjs / --width=375
 */

import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';

const BASE_URL = 'http://localhost:3000';
const OUT_DIR = path.resolve('temporary-screenshots');

const args = process.argv.slice(2);
const urlArg = args.find(a => a.startsWith('http://') || a.startsWith('https://') || a.startsWith('/')) ?? '/';
const nameArg = args.find(a => !a.startsWith('http') && !a.startsWith('/') && !a.startsWith('--'));
const width = parseInt(args.find(a => a.startsWith('--width='))?.split('=')[1] ?? '1280', 10);
const full = args.includes('--full');

const url = urlArg.startsWith('http') ? urlArg : `${BASE_URL}${urlArg}`;

fs.mkdirSync(OUT_DIR, { recursive: true });

const defaultSlug = urlArg.replace(/https?:\/\/[^/]+/, '').replace(/\//g, '_').replace(/^_|_$/g, '') || 'home';
const label = nameArg ?? defaultSlug;
const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19);
const filename = `${label}__${width}px__${timestamp}.png`;
const outPath = path.join(OUT_DIR, filename);

const browser = await puppeteer.launch({ headless: true });
const page = await browser.newPage();
await page.setViewport({ width, height: 900 });
await page.goto(url, { waitUntil: 'networkidle2' });
await page.screenshot({ path: outPath, fullPage: full });
await browser.close();

console.log(`✓ Screenshot saved: ${outPath}`);
