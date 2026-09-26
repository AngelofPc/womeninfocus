"use client";

import { FormEvent, useEffect, useState } from "react";

type Post = { id: string; name: string; category: string; title: string; body: string; date: string; likes: number };
const original: Post = { id: "source-1", name: "anon", category: "AI Tools", title: "Nigeria is for us", body: "we are going to win with ai, i promise", date: "2026-05-01", likes: 1 };
const categories = ["All", "Salary", "AI Tools", "Strategy", "Global", "Support", "Research"];

export function V2ForumBoard() {
  const [posts, setPosts] = useState<Post[]>([original]);
  const [liked, setLiked] = useState<string[]>([]);
  const [category, setCategory] = useState("All");
  const [composing, setComposing] = useState(false);
  const [name, setName] = useState("");
  const [topic, setTopic] = useState("Salary");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  useEffect(() => {
    try {
      const local = JSON.parse(localStorage.getItem("wif-posts") || "[]") as Post[];
      setPosts([...local, original]);
      setLiked(JSON.parse(localStorage.getItem("wif-liked") || "[]"));
    } catch {}
  }, []);

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!title.trim() || !body.trim()) return;
    try {
      const post: Post = { id: crypto.randomUUID(), name: name.trim() || "Anonymous", category: topic, title: title.trim(), body: body.trim(), date: new Date().toISOString(), likes: 0 };
      const local = JSON.parse(localStorage.getItem("wif-posts") || "[]") as Post[];
      localStorage.setItem("wif-posts", JSON.stringify([post, ...local]));
      setPosts([post, ...posts]);
      setCategory("All");
      setName(""); setTitle(""); setBody(""); setComposing(false);
    } catch {}
  };

  const toggleLike = (id: string) => {
    const next = liked.includes(id) ? liked.filter(item => item !== id) : [...liked, id];
    setLiked(next);
    try { localStorage.setItem("wif-liked", JSON.stringify(next)); } catch {}
  };
  const shown = posts.filter(post => category === "All" || post.category === category);

  return <div className="v2-forum-board">
    <div className="v2-forum-top"><div><span className="v2-label">Community discussion</span><h2>Stories and questions</h2><p>Share an experience, ask a question, or read what others have contributed.</p></div><button type="button" className="v2-button" onClick={() => setComposing(!composing)} aria-expanded={composing}>{composing ? "Close form" : "Share a story"} <span>{composing ? "×" : "+"}</span></button></div>
    <p className="v2-forum-notice">This preview saves new posts and reactions in your browser. They are visible only on this device.</p>
    {composing && <form className="v2-compose" onSubmit={submit}><div className="v2-compose-heading"><span className="v2-label">Add to the discussion</span><h3>Your story</h3></div><div className="v2-compose-grid"><label>Display name <small>optional</small><input maxLength={40} value={name} onChange={event => setName(event.target.value)} placeholder="Anonymous" /></label><label>Topic<select value={topic} onChange={event => setTopic(event.target.value)}>{categories.slice(1).map(item => <option key={item}>{item}</option>)}</select></label></div><label>Title<input required maxLength={90} value={title} onChange={event => setTitle(event.target.value)} placeholder="What is this about?" /></label><label>Your story<textarea required minLength={10} maxLength={2000} rows={6} value={body} onChange={event => setBody(event.target.value)} placeholder="Write your experience or question here." /></label><button type="submit" className="v2-button">Publish in this browser <span>→</span></button></form>}
    <div className="v2-forum-filters" role="group" aria-label="Filter discussion by topic">{categories.map(item => <button type="button" key={item} className={category === item ? "active" : ""} aria-pressed={category === item} onClick={() => setCategory(item)}>{item}</button>)}</div>
    <div className="v2-forum-count">{shown.length} {shown.length === 1 ? "story" : "stories"}</div>
    <div className="v2-post-list">{shown.map(post => <article key={post.id} className="v2-post"><div className="v2-post-meta"><span>{post.category}</span><time dateTime={post.date}>{new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</time></div><h3>{post.title}</h3><p>{post.body}</p><div className="v2-post-foot"><span>Shared by {post.name}</span><button type="button" onClick={() => toggleLike(post.id)} aria-pressed={liked.includes(post.id)}>{liked.includes(post.id) ? "♥" : "♡"} {post.likes + (liked.includes(post.id) ? 1 : 0)}</button></div></article>)}</div>
    {shown.length === 0 && <div className="v2-empty"><h3>No stories in this topic yet.</h3><p>You can start the conversation.</p><button type="button" onClick={() => setComposing(true)}>Share a story ↗</button></div>}
  </div>;
}
