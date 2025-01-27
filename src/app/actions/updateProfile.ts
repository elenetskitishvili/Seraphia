export async function updateProfile(formData: FormData) {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  console.log("Profile updated!🤩");
}
