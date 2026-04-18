"use client";

import { useEffect } from "react";

// add to allow bootstaps dropdown effects to work

export default function BootstrapClient() {
  useEffect(() => {
    // This imports the JS only on the client side
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return null;
}
