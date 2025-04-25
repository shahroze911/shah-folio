"use client";

// This file adds a fix for the "can't redefine non-configurable property 'cookie'" error
// that occurs with React 19 and some security packages

if (typeof window !== 'undefined') {
  // Prevent any attempt to redefine the cookie property
  try {
    const cookieDescriptor = Object.getOwnPropertyDescriptor(Document.prototype, 'cookie');
    if (cookieDescriptor && !cookieDescriptor.configurable) {
      // Create a safe getter/setter that uses the original methods but traps errors
      Object.defineProperty(Document.prototype, '_originalCookie', {
        get() {
          try {
            return cookieDescriptor.get?.call(this) || '';
          } catch (e) {
            console.warn('Error in original cookie getter:', e);
            return '';
          }
        },
        set(value) {
          try {
            cookieDescriptor.set?.call(this, value);
          } catch (e) {
            console.warn('Error in original cookie setter:', e);
          }
        },
        configurable: true
      });
      
      Object.defineProperty(Document.prototype, 'cookie', {
        get() {
          try {
            return this._originalCookie;
          } catch (e) {
            console.warn('Error accessing document.cookie:', e);
            return '';
          }
        },
        set(value) {
          try {
            this._originalCookie = value;
          } catch (e) {
            console.warn('Error setting document.cookie:', e);
          }
        },
        configurable: true,
        enumerable: true
      });
    }
  } catch (e) {
    console.warn('Error setting up cookie protection:', e);
  }
}

export default function CookieFix() {
  return null;
} 