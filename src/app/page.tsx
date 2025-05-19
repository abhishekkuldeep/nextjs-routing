import Link from "next/link";

export default function Home(){
    return <>
     <h1> Welcome to Home page</h1>
     <Link style={{padding:"4px"}} href="/blog">Blog</Link>
     <Link style={{padding:"4px"}} href="/products">Products</Link>
     <Link style={{padding:"4px"}} href="/order-product">Order Product</Link>
    </>
}