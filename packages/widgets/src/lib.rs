use std::f64::consts::PI;
use wasm_bindgen::prelude::*;

/// Draw a Fourier series approximation of a square wave on a canvas.
/// The canvas must be 600x400.
#[wasm_bindgen]
pub fn draw_fourier_square(ctx: &web_sys::CanvasRenderingContext2d, terms: u32, width: u32, height: u32) {
    let w = width as f64;
    let h = height as f64;
    let cx = w / 2.0;
    let cy = h / 2.0;
    let scale = h * 0.4;

    ctx.clear_rect(0.0, 0.0, w, h);

    // Draw axes
    ctx.set_stroke_style(&JsValue::from_str("rgba(150,150,200,0.3)"));
    ctx.set_line_width(1.0);
    ctx.begin_path();
    ctx.move_to(0.0, cy);
    ctx.line_to(w, cy);
    ctx.stroke();
    ctx.begin_path();
    ctx.move_to(cx, 0.0);
    ctx.line_to(cx, h);
    ctx.stroke();

    // Draw Fourier series
    ctx.set_stroke_style(&JsValue::from_str("#ff6b35"));
    ctx.set_line_width(2.0);
    ctx.begin_path();

    let steps = (w / 2.0) as u32;
    let first = true;

    for i in 0..=steps {
        let x = i as f64 / steps as f64;
        let px = cx + (x - 0.5) * w * 0.9;

        let mut y = 0.0;
        for n in 1..=terms {
            let k = (2 * n - 1) as f64;
            y += (1.0 / k) * (k * x * 2.0 * PI).sin();
        }
        y *= 4.0 / PI;
        let py = cy - y * scale;

        if i == 0 {
            ctx.move_to(px, py);
        } else {
            ctx.line_to(px, py);
        }
    }
    ctx.stroke();
}

/// Draw a simple sine wave on a canvas. Basic sanity check.
#[wasm_bindgen]
pub fn draw_sine(ctx: &web_sys::CanvasRenderingContext2d, width: u32, height: u32) {
    let w = width as f64;
    let h = height as f64;
    let cy = h / 2.0;
    let scale = h * 0.35;

    ctx.clear_rect(0.0, 0.0, w, h);

    ctx.set_stroke_style(&JsValue::from_str("rgba(150,150,200,0.3)"));
    ctx.set_line_width(1.0);
    ctx.begin_path();
    ctx.move_to(0.0, cy);
    ctx.line_to(w, cy);
    ctx.stroke();

    ctx.set_stroke_style(&JsValue::from_str("#ff6b35"));
    ctx.set_line_width(2.0);
    ctx.begin_path();

    for i in 0..=w as u32 {
        let x = i as f64;
        let nx = x / w;
        let py = cy - (nx * 4.0 * PI).sin() * scale;
        if i == 0 {
            ctx.move_to(x, py);
        } else {
            ctx.line_to(x, py);
        }
    }
    ctx.stroke();
}
