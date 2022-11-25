import Image from "next/image"

export default function qrCode() {
  return <Image src={require("../../images/qrcode.png")} objectFit="fill" />
}