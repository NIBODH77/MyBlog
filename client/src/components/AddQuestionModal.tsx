import React, { useState } from 'react';
import { X, Image, Video, Link as LinkIcon, AlignLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { TranslatedText } from '@/hooks/useTranslation';

interface AddQuestionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AddQuestionModal({ isOpen, onClose }: AddQuestionModalProps) {
  const [activeTab, setActiveTab] = useState<'question' | 'post'>('question');
  const [questionText, setQuestionText] = useState('');
  const [postTitle, setPostTitle] = useState('');
  const [postContent, setPostContent] = useState('');
  const [visibility, setVisibility] = useState('Public');

  if (!isOpen) return null;

  const handleAddQuestion = () => {
    console.log('Question added:', questionText);
    onClose();
    setQuestionText('');
  };

  const handleCreatePost = () => {
    console.log('Post created:', { title: postTitle, content: postContent });
    onClose();
    setPostTitle('');
    setPostContent('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-2xl mx-4 animate-slideDown max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-200 p-4 sticky top-0 bg-white z-10">
          <div className="flex gap-8">
            <button
              className={`pb-2 text-sm font-medium transition-colors ${
                activeTab === 'question'
                  ? 'text-gray-900 border-b-2 border-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setActiveTab('question')}
            >
              <TranslatedText>Add Question</TranslatedText>
            </button>
            <button
              className={`pb-2 text-sm font-medium transition-colors ${
                activeTab === 'post'
                  ? 'text-gray-900 border-b-2 border-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setActiveTab('post')}
            >
              <TranslatedText>Create Post</TranslatedText>
            </button>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {activeTab === 'question' ? (
            <>
              {/* Tips Section */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                <h3 className="text-blue-900 font-semibold text-sm mb-2">
                  <TranslatedText>Tips on getting good answers quickly</TranslatedText>
                </h3>
                <ul className="space-y-1 text-blue-700 text-sm">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span><TranslatedText>Make sure your question has not been asked already</TranslatedText></span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span><TranslatedText>Keep your question short and to the point</TranslatedText></span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span><TranslatedText>Double-check grammar and spelling</TranslatedText></span>
                  </li>
                </ul>
              </div>

              {/* Input Section */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                    L
                  </div>
                  <button className="text-sm text-gray-600 hover:text-gray-900">
                    ▸
                  </button>
                  <select
                    value={visibility}
                    onChange={(e) => setVisibility(e.target.value)}
                    className="text-sm text-gray-700 border border-gray-300 rounded px-2 py-1 focus:outline-none focus:border-blue-500"
                  >
                    <option><TranslatedText>Public</TranslatedText></option>
                    <option><TranslatedText>Private</TranslatedText></option>
                    <option><TranslatedText>Anonymous</TranslatedText></option>
                  </select>
                </div>

                <textarea
                  value={questionText}
                  onChange={(e) => setQuestionText(e.target.value)}
                  placeholder='Start your question with "What", "How", "Why", etc.'
                  className="w-full min-h-[150px] p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 resize-none text-gray-900"
                />
              </div>

              {/* Footer */}
              <div className="flex items-center justify-end gap-3">
                <Button
                  variant="ghost"
                  onClick={onClose}
                  className="text-gray-600 hover:text-gray-900"
                >
                  <TranslatedText>Cancel</TranslatedText>
                </Button>
                <Button
                  onClick={handleAddQuestion}
                  disabled={!questionText.trim()}
                  className={`rounded-full px-6 ${
                    questionText.trim()
                      ? 'bg-blue-600 hover:bg-blue-700 text-white'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  <TranslatedText>Add question</TranslatedText>
                </Button>
              </div>
            </>
          ) : (
            <>
              {/* Create Post Section */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                    L
                  </div>
                  <select
                    value={visibility}
                    onChange={(e) => setVisibility(e.target.value)}
                    className="text-sm text-gray-700 border border-gray-300 rounded px-2 py-1 focus:outline-none focus:border-blue-500"
                  >
                    <option><TranslatedText>Public</TranslatedText></option>
                    <option><TranslatedText>Private</TranslatedText></option>
                    <option><TranslatedText>Anonymous</TranslatedText></option>
                  </select>
                </div>

                {/* Post Title */}
                <input
                  type="text"
                  value={postTitle}
                  onChange={(e) => setPostTitle(e.target.value)}
                  placeholder="Add a title (optional)"
                  className="w-full p-3 border-b border-gray-300 focus:outline-none focus:border-blue-500 text-gray-900 font-semibold mb-4"
                />

                {/* Post Content */}
                <textarea
                  value={postContent}
                  onChange={(e) => setPostContent(e.target.value)}
                  placeholder="Say something..."
                  className="w-full min-h-[200px] p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 resize-none text-gray-900"
                />

                {/* Toolbar */}
                <div className="flex items-center gap-4 mt-4 pt-4 border-t border-gray-200">
                  <button className="text-gray-600 hover:text-blue-600 transition-colors p-2 rounded hover:bg-gray-100">
                    <Image className="w-5 h-5" />
                  </button>
                  <button className="text-gray-600 hover:text-blue-600 transition-colors p-2 rounded hover:bg-gray-100">
                    <Video className="w-5 h-5" />
                  </button>
                  <button className="text-gray-600 hover:text-blue-600 transition-colors p-2 rounded hover:bg-gray-100">
                    <LinkIcon className="w-5 h-5" />
                  </button>
                  <button className="text-gray-600 hover:text-blue-600 transition-colors p-2 rounded hover:bg-gray-100">
                    <AlignLeft className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-end gap-3">
                <Button
                  variant="ghost"
                  onClick={onClose}
                  className="text-gray-600 hover:text-gray-900"
                >
                  <TranslatedText>Cancel</TranslatedText>
                </Button>
                <Button
                  onClick={handleCreatePost}
                  disabled={!postContent.trim()}
                  className={`rounded-full px-6 ${
                    postContent.trim()
                      ? 'bg-blue-600 hover:bg-blue-700 text-white'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  <TranslatedText>Post</TranslatedText>
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}