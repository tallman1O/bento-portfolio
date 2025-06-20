interface CacheItem<T> {
  data: T;
  timestamp: number;
  expiresAt: number;
}

export class CacheManager {
  private static readonly CACHE_PREFIX = "bento_portfolio_";
  private static readonly ONE_DAY_MS = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

  static get<T>(key: string): T | null {
    if (typeof window === "undefined") return null; // SSR check

    try {
      const item = localStorage.getItem(this.CACHE_PREFIX + key);
      if (!item) return null;

      const cacheItem: CacheItem<T> = JSON.parse(item);
      const now = Date.now();

      // Check if cache has expired
      if (now > cacheItem.expiresAt) {
        this.remove(key);
        return null;
      }

      return cacheItem.data;
    } catch (error) {
      console.error("Error reading from cache:", error);
      return null;
    }
  }

  static set<T>(key: string, data: T): void {
    if (typeof window === "undefined") return; // SSR check

    try {
      const now = Date.now();
      const cacheItem: CacheItem<T> = {
        data,
        timestamp: now,
        expiresAt: now + this.ONE_DAY_MS,
      };

      localStorage.setItem(this.CACHE_PREFIX + key, JSON.stringify(cacheItem));
    } catch (error) {
      console.error("Error writing to cache:", error);
    }
  }

  static remove(key: string): void {
    if (typeof window === "undefined") return; // SSR check

    try {
      localStorage.removeItem(this.CACHE_PREFIX + key);
    } catch (error) {
      console.error("Error removing from cache:", error);
    }
  }

  static clear(): void {
    if (typeof window === "undefined") return; // SSR check

    try {
      const keys = Object.keys(localStorage);
      keys.forEach((key) => {
        if (key.startsWith(this.CACHE_PREFIX)) {
          localStorage.removeItem(key);
        }
      });
    } catch (error) {
      console.error("Error clearing cache:", error);
    }
  }

  static isExpired(key: string): boolean {
    if (typeof window === "undefined") return true; // SSR check

    try {
      const item = localStorage.getItem(this.CACHE_PREFIX + key);
      if (!item) return true;

      const cacheItem: CacheItem<any> = JSON.parse(item);
      return Date.now() > cacheItem.expiresAt;
    } catch (error) {
      return true;
    }
  }
}
