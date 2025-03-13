import Link from "next/link"
export default function NotFound() {
    return (
        <div>
            <h1>404 Not Found</h1>
            <p>ページが見つかりません</p>
            <Link href="/">ホームに戻る</Link>
        </div>
    )
}