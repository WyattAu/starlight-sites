/* @ts-self-types="./starlight_widgets.d.ts" */

/**
 * Draw a Fourier series approximation of a square wave on a canvas.
 * The canvas must be 600x400.
 * @param {CanvasRenderingContext2D} ctx
 * @param {number} terms
 * @param {number} width
 * @param {number} height
 */
export function draw_fourier_square(ctx, terms, width, height) {
  wasm.draw_fourier_square(ctx, terms, width, height)
}

/**
 * Draw a simple sine wave on a canvas. Basic sanity check.
 * @param {CanvasRenderingContext2D} ctx
 * @param {number} width
 * @param {number} height
 */
export function draw_sine(ctx, width, height) {
  wasm.draw_sine(ctx, width, height)
}
function __wbg_get_imports() {
  const import0 = {
    __proto__: null,
    __wbg___wbindgen_throw_344f42d3211c4765: (arg0, arg1) => {
      throw new Error(getStringFromWasm0(arg0, arg1))
    },
    __wbg_beginPath_ca2dfce389ff20d2: arg0 => {
      arg0.beginPath()
    },
    __wbg_clearRect_520d2bbc2437bfaa: (arg0, arg1, arg2, arg3, arg4) => {
      arg0.clearRect(arg1, arg2, arg3, arg4)
    },
    __wbg_lineTo_1aeefd30328165b5: (arg0, arg1, arg2) => {
      arg0.lineTo(arg1, arg2)
    },
    __wbg_moveTo_2618bed6b5b25622: (arg0, arg1, arg2) => {
      arg0.moveTo(arg1, arg2)
    },
    __wbg_set_lineWidth_beb3d05e36f4cc53: (arg0, arg1) => {
      arg0.lineWidth = arg1
    },
    __wbg_set_strokeStyle_8877ef451272f3e2: (arg0, arg1) => {
      arg0.strokeStyle = arg1
    },
    __wbg_stroke_cf809e69aae41b03: arg0 => {
      arg0.stroke()
    },
    __wbindgen_cast_0000000000000001: (arg0, arg1) => {
      // Cast intrinsic for `Ref(String) -> Externref`.
      const ret = getStringFromWasm0(arg0, arg1)
      return ret
    },
    __wbindgen_init_externref_table: () => {
      const table = wasm.__wbindgen_externrefs
      const offset = table.grow(4)
      table.set(0, undefined)
      table.set(offset + 0, undefined)
      table.set(offset + 1, null)
      table.set(offset + 2, true)
      table.set(offset + 3, false)
    },
  }
  return {
    __proto__: null,
    './starlight_widgets_bg.js': import0,
  }
}

function getStringFromWasm0(ptr, len) {
  return decodeText(ptr >>> 0, len)
}

let cachedUint8ArrayMemory0 = null
function getUint8ArrayMemory0() {
  if (cachedUint8ArrayMemory0 === null || cachedUint8ArrayMemory0.byteLength === 0) {
    cachedUint8ArrayMemory0 = new Uint8Array(wasm.memory.buffer)
  }
  return cachedUint8ArrayMemory0
}

let cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true, fatal: true })
cachedTextDecoder.decode()
const MAX_SAFARI_DECODE_BYTES = 2146435072
let numBytesDecoded = 0
function decodeText(ptr, len) {
  numBytesDecoded += len
  if (numBytesDecoded >= MAX_SAFARI_DECODE_BYTES) {
    cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true, fatal: true })
    cachedTextDecoder.decode()
    numBytesDecoded = len
  }
  return cachedTextDecoder.decode(getUint8ArrayMemory0().subarray(ptr, ptr + len))
}

let wasmModule, wasmInstance, wasm
function __wbg_finalize_init(instance, module) {
  wasmInstance = instance
  wasm = instance.exports
  wasmModule = module
  cachedUint8ArrayMemory0 = null
  wasm.__wbindgen_start()
  return wasm
}

async function __wbg_load(module, imports) {
  if (typeof Response === 'function' && module instanceof Response) {
    if (typeof WebAssembly.instantiateStreaming === 'function') {
      try {
        return await WebAssembly.instantiateStreaming(module, imports)
      } catch (e) {
        const validResponse = module.ok && expectedResponseType(module.type)

        if (validResponse && module.headers.get('Content-Type') !== 'application/wasm') {
          console.warn(
            '`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n',
            e,
          )
        } else {
          throw e
        }
      }
    }

    const bytes = await module.arrayBuffer()
    return await WebAssembly.instantiate(bytes, imports)
  } else {
    const instance = await WebAssembly.instantiate(module, imports)

    if (instance instanceof WebAssembly.Instance) {
      return { instance, module }
    } else {
      return instance
    }
  }

  function expectedResponseType(type) {
    switch (type) {
      case 'basic':
      case 'cors':
      case 'default':
        return true
    }
    return false
  }
}

function initSync(module) {
  if (wasm !== undefined) return wasm

  if (module !== undefined) {
    if (Object.getPrototypeOf(module) === Object.prototype) {
      ;({ module } = module)
    } else {
      console.warn('using deprecated parameters for `initSync()`; pass a single object instead')
    }
  }

  const imports = __wbg_get_imports()
  if (!(module instanceof WebAssembly.Module)) {
    module = new WebAssembly.Module(module)
  }
  const instance = new WebAssembly.Instance(module, imports)
  return __wbg_finalize_init(instance, module)
}

async function __wbg_init(module_or_path) {
  if (wasm !== undefined) return wasm

  if (module_or_path !== undefined) {
    if (Object.getPrototypeOf(module_or_path) === Object.prototype) {
      ;({ module_or_path } = module_or_path)
    } else {
      console.warn(
        'using deprecated parameters for the initialization function; pass a single object instead',
      )
    }
  }

  if (module_or_path === undefined) {
    module_or_path = new URL('starlight_widgets_bg.wasm', import.meta.url)
  }
  const imports = __wbg_get_imports()

  if (
    typeof module_or_path === 'string' ||
    (typeof Request === 'function' && module_or_path instanceof Request) ||
    (typeof URL === 'function' && module_or_path instanceof URL)
  ) {
    module_or_path = fetch(module_or_path)
  }

  const { instance, module } = await __wbg_load(await module_or_path, imports)

  return __wbg_finalize_init(instance, module)
}

export { __wbg_init as default, initSync }
