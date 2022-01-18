import React from "react";

export async function sleepAsync(msec) {
    return new Promise(resolve => setTimeout(resolve, msec));
}