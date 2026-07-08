import Head from 'next/head';
import Link from 'next/link';
import { useMemo, useState } from 'react';

const PROMPTS = [
  'I want something soft and calm for a slow evening.',
  'Give me a ritual for feeling more confident today.',
  'Help me pair my mood with a new underwear color.',
];

const RESPONSE_PATTERNS: Array<[RegExp, string]> = [
  [/(calm|quiet|rest|slow|soft)/i, 'A linen set in muted lavender with a candle-lit ritual will keep your core calm and grounded. Try a slow breath sequence before slipping into a cozy layer.'],
  [/(bold|confident|power|dangerous|edge)/i, 'Reach for a saturated jewel tone and pair it with music that makes you move with intention. A quick power pose and a dark berry ritual will help you wear the mood like armor.'],
  [/(warm|cozy|comfort|safe)/i, 'Choose a plush texture in warm neutrals, then build a tiny comfort ritual around touch: soft fabric, a warm drink, and a gentle stretch.'],
  [/(energetic|bright|playful|fun)/i, 'Bright color, spark, and a ritual that starts with movement will amplify that energy. Think citrus notes, quick pulse work, and a confident compliment to yourself.'],
  [/(night|dream|rest)/i, 'A muted midnight palette and a quiet ritual with dim light, deep breaths, and a journal prompt can ease you into night.'],
];

function generateAssistantResponse(message: string) {
  const trimmed = message.trim();
  if (!trimmed) return 'Send me a feeling or a question — I’ll suggest the right mood, ritual, or underwear pair. Start with words like calm, bold, night, or comfort.';

  for (const [pattern, response] of RESPONSE_PATTERNS) {
    if (pattern.test(trimmed)) return response;
  }

  return 'Aurora hears your intent. For mood-driven suggestions, try describing how you want to feel, whether it is calm, bold, cozy, or energetic.';
}

export default function AI() {
  const [message, setMessage] = useState('');
  const [history, setHistory] = useState<Array<{ role: 'user' | 'assistant'; text: string }>>([
    { role: 'assistant', text: 'Ready to translate mood into suggestion. Tell me how you want to feel.' },
  ]);
  const [isThinking, setIsThinking] = useState(false);

  const canSend = message.trim().length > 0;
  const responsePreview = useMemo(() => generateAssistantResponse(message), [message]);

  const sendMessage = (event?: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
    const trimmed = message.trim();
    if (!trimmed) return;

    setIsThinking(true);
    setHistory((prev) => [...prev, { role: 'user', text: trimmed }]);
    setMessage('');

    window.setTimeout(() => {
      setHistory((prev) => [...prev, { role: 'assistant', text: generateAssistantResponse(trimmed) }]);
      setIsThinking(false);
    }, 260);
  };

  return (
    <>
      <Head>
        <title>Aurora AI — mood assistant</title>
        <meta name="description" content="Aurora AI helps you turn feeling into curated underwear and ritual suggestions." />
      </Head>

      <main className="container py-12">
        <div className="mb-10 space-y-4">
          <Link href="/">
            <a className="text-sm text-muted hover:text-white transition-colors">← Back to Aurora</a>
          </Link>
          <div className="max-w-2xl">
            <p className="kicker">Aurora AI</p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white">A quiet assistant for mood, rituals, and underwear choices.</h1>
            <p className="mt-4 text-muted leading-relaxed">
              Share how you want to feel. Aurora will return a small, human-centered suggestion for color, texture, ritual, and mood.
            </p>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.65fr_1fr]">
          <section className="card p-6">
            <div className="space-y-6">
              <div className="rounded-3xl border border-white/6 bg-white/5 p-5">
                <p className="text-sm uppercase tracking-[0.24em] text-muted">Mood prompt</p>
                <p className="mt-3 text-base leading-7 text-white">
                  Type a feeling, intention, or ritual question. Aurora will answer with a mood-led suggestion that fits the brand’s quiet, tactile energy.
                </p>
              </div>

              <form onSubmit={sendMessage} className="space-y-4">
                <label htmlFor="message" className="text-sm font-medium text-white">
                  Tell me your mood
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  className="w-full rounded-3xl border border-white/10 bg-black/60 px-4 py-4 text-white outline-none transition focus:border-accent/70"
                  placeholder="e.g. I want to feel calm and confident tonight"
                />
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <button
                    type="submit"
                    disabled={!canSend || isThinking}
                    className="btn-primary disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {isThinking ? 'Listening...' : 'Ask Aurora'}
                  </button>
                  <p className="text-xs text-muted">Preview: {responsePreview}</p>
                </div>
              </form>

              <div className="space-y-3">
                {history.map((entry, index) => (
                  <div key={`${entry.role}-${index}`} className="rounded-3xl border border-white/10 bg-black/50 p-4">
                    <div className="mb-2 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.24em] text-muted">
                      <span>{entry.role === 'user' ? 'You' : 'Aurora'}</span>
                      <span className="text-white/40">•</span>
                      <span>{entry.role === 'user' ? 'prompt' : 'response'}</span>
                    </div>
                    <p className="whitespace-pre-wrap text-sm leading-6 text-white">{entry.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <aside className="card p-6">
            <div className="space-y-5">
              <div>
                <p className="kicker">Try these prompts</p>
                <div className="mt-4 grid gap-3">
                  {PROMPTS.map((prompt) => (
                    <button
                      key={prompt}
                      type="button"
                      className="rounded-3xl border border-white/10 bg-white/5 px-4 py-3 text-left text-sm text-white transition hover:border-accent/60 hover:bg-white/10"
                      onClick={() => setMessage(prompt)}
                    >
                      {prompt}
                    </button>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-black/50 p-5">
                <p className="text-sm uppercase tracking-[0.24em] text-muted">Why this feels like AI</p>
                <p className="mt-3 text-sm leading-6 text-white/70">
                  Aurora is built as a mood-aware assistant with expressive suggestions. It reads simple language and returns curated guidance for feelings, rituals, and intimate wardrobe choices.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </>
  );
}
