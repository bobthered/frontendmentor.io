import publicIp from 'public-ip';

export async function get() {
  const ipAddress = await publicIp.v4();
  return {
    body: {
      ipAddress
    }
  };
  // console.log({ipAddress})
  // return {ipAddress : ipAddress};
}