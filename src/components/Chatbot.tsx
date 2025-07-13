import React, { useState, useRef, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Textarea } from "@/components/ui/TextArea";
import { Terminal } from "./icons/Terminal";
import { Bot } from "./icons/Bot";
import { Send } from "./icons/Send";
import { Close } from "./icons/Close";
import { motion, AnimatePresence } from "motion/react";
import { useIsDarkTheme } from "@/hooks/useTheme";
import { cn } from "@/lib/utils";

interface Message {
  id: string;
  content: string;
  role: "user" | "assistant";
  timestamp: Date;
}

const API_URL = import.meta.env.VITE_CHAT_API_URL;

const Chatbot = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isTerminalMode, setIsTerminalMode] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const isDark = useIsDarkTheme();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputMessage,
      role: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage("");
    setIsLoading(true);

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: [
            {
              role: "user",
              content: inputMessage,
            },
          ],
        }),
      });

      if (!response.ok) {
        throw new Error(`API request failed: ${response.status}`);
      }

      const data = await response.json();
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: data.choices[0].message.content,
        role: "assistant",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      let message = "Something went wrong.";
      if (error instanceof Error) {
        message = error.message;
      }

      const errorMessage: Message = {
        id: (Date.now() + 2).toString(),
        content: `Error: ${message}`,
        role: "assistant",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const formatTimestamp = (date: Date) => {
    return date.toLocaleTimeString("en-US", {
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const toggleMode = () => {
    setIsTerminalMode(!isTerminalMode);
  };

  return (
    <>
      <motion.div
        className="fixed bottom-8 right-4 sm:right-6 z-51"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          delay: 1,
          duration: 0.5,
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
      >
        <AnimatePresence>
          {!isOpen && (
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 180 }}
              transition={{ duration: 0.3 }}
            >
              <button
                onClick={() => setIsOpen(true)}
                className={cn(
                  "w-[58px] h-[58px] rounded-2xl shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center border text-text",
                  isDark
                    ? "supports-backdrop-blur:bg-black/10 bg-black/75 border-[#232B34]"
                    : "supports-backdrop-blur:bg-background/10 bg-background/75 border-[#93a1a1]",
                )}
              >
                {isTerminalMode ? (
                  <Terminal className="w-5 h-5 sm:w-7 sm:h-7" />
                ) : (
                  <Bot className="w-5 h-5 sm:w-7 sm:h-7" />
                )}
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Chat Box */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed right-4 sm:bottom-8 sm:right-6 z-51 w-[calc(100vw-2rem)] max-w-sm sm:w-96 h-[68vh] sm:h-[520px] bg-background rounded-2xl"
            initial={{ scale: 0, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0, opacity: 0, y: 50 }}
            transition={{
              duration: 0.3,
              type: "spring",
              stiffness: 300,
              damping: 30,
            }}
          >
            <Card
              style={{
                fontFamily: isTerminalMode ? "monospace" : "inherit",
              }}
              className={cn(
                "w-full h-full flex flex-col overflow-hidden shadow-lg",
                "gradient-bgColor gradient-border",
              )}
            >
              <CardHeader className="flex-shrink-0 pb-3 shadow-lg">
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2 text-text font-semibold">
                    {isTerminalMode ? (
                      <Terminal className="w-5 h-5 sm:w-7 sm:h-7" />
                    ) : (
                      <Bot className="w-5 h-5 sm:w-7 sm:h-7" />
                    )}
                    masc
                  </CardTitle>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={toggleMode}
                      className="h-10 w-10 text-text/80 hover:text-text hover:bg-white/10 rounded flex items-center justify-center"
                      title={
                        isTerminalMode
                          ? "Switch to Professional Mode"
                          : "Switch to Terminal Mode"
                      }
                    >
                      {isTerminalMode ? (
                        <Bot className="w-5 h-5 sm:w-7 sm:h-7" />
                      ) : (
                        <Terminal className="w-5 h-5 sm:w-7 sm:h-7" />
                      )}
                    </button>
                    <button
                      onClick={() => setIsOpen(false)}
                      className="h-10 w-10 text-text/80 hover:text-text hover:bg-white/10 rounded
                     flex items-center justify-center"
                    >
                      <Close className="w-5 h-5 sm:w-7 sm:h-7" />
                    </button>
                  </div>
                </div>
              </CardHeader>

              {/* Chat Messages */}
              <CardContent className="flex-1 overflow-y-auto p-3 space-y-4 bg-background">
                {messages.length === 0 && (
                  <motion.div
                    className="text-center text-sm text-muted-foreground mt-10"
                    animate={{ opacity: [1, 0.5, 1] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    {isTerminalMode ? (
                      <div className="text-xs sm:text-sm text-start">
                        <span className="text-accent">user@terminal</span>
                        <span className="text-accent">:</span>
                        <span className="text-accent">~</span>
                        <span className="text-accent">$ </span>
                        <span className="animate-pulse">_</span>
                        <p className="text-xs sm:text-sm mt-2 text-text">
                          # Terminal ready. Type your query about Manas' work...
                        </p>
                      </div>
                    ) : (
                      <>
                        <Bot className="w-12 h-12 mx-auto" />
                        <p className="text-sm text-text">
                          Hi! I'm here to help you learn about Manas' experience
                          and projects. Ask me anything!
                        </p>
                      </>
                    )}
                  </motion.div>
                )}

                {messages.map((msg) => (
                  <div key={msg.id} className="text-sm whitespace-pre-wrap">
                    {isTerminalMode ? (
                      <div className="font-mono">
                        <div className="text-xs text-muted-foreground mb-1">
                          [{formatTimestamp(msg.timestamp)}]
                        </div>
                        {msg.role === "user" ? (
                          <div className="text-accent">
                            user@terminal:~$ {msg.content}
                          </div>
                        ) : (
                          <div className="pl-3 border-l border-accent text-accent/80">
                            {msg.content}
                          </div>
                        )}
                      </div>
                    ) : (
                      <div
                        className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                      >
                        <div
                          className={`rounded-lg p-3 max-w-[75%] ${
                            msg.role === "user"
                              ? "bg-accent text-white"
                              : "border gradient-bgColor gradient-border text-text"
                          }`}
                        >
                          <div className="text-xs opacity-70 mb-1">
                            {formatTimestamp(msg.timestamp)}
                          </div>
                          {msg.content}
                        </div>
                      </div>
                    )}
                  </div>
                ))}

                {/* Loading Indicator */}
                {isLoading && (
                  <motion.div
                    className="text-sm text-muted-foreground"
                    animate={{ opacity: [1, 0.5, 1] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    {isTerminalMode ? "..." : "Thinking..."}
                  </motion.div>
                )}
                <div ref={messagesEndRef} />
              </CardContent>

              {/* Input Field */}
              <div
                className={cn(
                  "p-3 bg-background border-t",
                  isDark ? "border-t-[#232B34]" : "border-t-[#93a1a1]",
                )}
              >
                <div className="flex items-center gap-2">
                  <Textarea
                    placeholder={
                      isTerminalMode
                        ? "type your command..."
                        : "Ask about Manas’ projects..."
                    }
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    disabled={isLoading}
                    className={cn(
                      "border resize-none text-sm bg-background text-text",
                      isDark ? "border-[#232B34]" : "border-[#93a1a1]",
                      isTerminalMode ? "font-mono" : "",
                    )}
                  />
                  <button
                    onClick={sendMessage}
                    disabled={!inputMessage.trim() || isLoading}
                    className={cn(
                      "h-10 w-10 text-text border border-text flex justify-center items-center rounded-lg",
                      isDark ? "border-[#232B34]" : "border-[#93a1a1]",
                    )}
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
