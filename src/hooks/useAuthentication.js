import { useState, useEffect } from "react";

export const useAuthentication =  (username) => {

  useEffect(() => {

  }, [username]);

  return { isAuthenticated, isUnAuthenticated };
}
