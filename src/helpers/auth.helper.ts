import { ILoginProps, IRegisterProps } from "@/interfaces";
import { Toast } from "@/helpers";

const APIURL = process.env.NEXT_PUBLIC_API_URL;

export async function register(userData: IRegisterProps) {
  try {
      const res = await fetch(`${APIURL}/users/register`, {
          method: "POST",
          headers: {
              "Content-type": "application/json",
          },
          body: JSON.stringify(userData),
      });

      if (res.ok) {
          return res.json(); // Registro exitoso
      } else {
          const errorData = await res.json();
          if (errorData.message === "Email already exists") {

            throw new Error("Email already exists");
          } else {
              throw new Error(errorData.message); 
          }
      }
  } catch (error: any) {
      Toast.fire({
          icon: "error",
          title: error.message || "Failed to register",
      });
      throw error; 
  }
}


    export async function login(userData: ILoginProps){

      try {
        const res = await fetch(`${APIURL}/users/login`,{
          method: "POST",
          headers: {
            "Content-type": "application/json"
          },
          body: JSON.stringify(userData)
        })
        if(res.ok){
          return res.json();
        }else {
          Toast.fire({
            icon: "error",
            title: "Failed to login", 
          });
        }
      } catch (error:any) {
        Toast.fire({
          icon: "error",
          title: "Failed to login", 
        });
        throw new Error(error)
      }
          
      };
  
  
  
