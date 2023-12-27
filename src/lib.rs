use wasm_bindgen::prelude::*;
use web_sys::console::log_1 as log;
use base64::{Engine as _, engine::general_purpose};
use image::load_from_memory;
use image::ImageOutputFormat::Png;
use std::io::Cursor;

#[wasm_bindgen]
pub fn grayscale(encoded_file: &str) -> String {
    log(&"grayscale called".into());
    
    let base64_to_vector = general_purpose::STANDARD.decode(encoded_file).unwrap();
    log(&"image decoded".into());

    let mut img = load_from_memory(&base64_to_vector).unwrap();
    log(&"image loaded".into());

    img = img.grayscale();
    log(&"grayscale effect applied".into());
    
    let mut buffer = Cursor::new(vec![]);
    img.write_to(&mut buffer, Png).unwrap();
    log(&"new image written".into());    

    // Pass the reference to the underlying vector to the encode function
    let encoded_img = general_purpose::STANDARD.encode(&buffer.get_ref());
    let data_url = format!("data:image/png;base64,{}", encoded_img);
    
    data_url
}
