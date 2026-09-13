"""Local preview server with caching switched off.

Plain http.server sends no Cache-Control, so browsers fall back to heuristic
caching and keep serving stale CSS after an edit.

    python .claude/devserver.py [port]
"""
import sys
from http.server import HTTPServer, SimpleHTTPRequestHandler


class NoCacheHandler(SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Cache-Control", "no-store, must-revalidate")
        super().end_headers()


if __name__ == "__main__":
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 8123
    print("serving . on http://localhost:%d (no-cache)" % port)
    HTTPServer(("", port), NoCacheHandler).serve_forever()
