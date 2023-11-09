export const rootApi = "https://cargolink.pythonanywhere.com/api";

export interface signUpParameters {
  email: string;
  username: string;
  password: string;
}

export interface signUpReturn {
  username: string;
  email: string;
  password: string;
}

export const signUp = async ({
  email,
  username,
  password,
}: signUpParameters): Promise<signUpReturn | undefined> => {
  try {
    const fetchSignUp = await fetch(`${rootApi}/register`, {
      method: "POST",
      body: JSON.stringify({ email, username, password }),
    });

    return await fetchSignUp.json();
  } catch (error) {
    console.error(error);
    return undefined;
  }
};
