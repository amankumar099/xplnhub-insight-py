import React, { useState } from 'react';
import { Terminal, Copy, Check, Download, Key, Play, Monitor, Smartphone, ChevronRight, BookOpen, AlertCircle } from 'lucide-react';

const Implementation: React.FC = () => {
  const [selectedOS, setSelectedOS] = useState<'unix' | 'windows'>('unix');
  const [copiedStates, setCopiedStates] = useState<{ [key: string]: boolean }>({});

  const copyToClipboard = async (text: string, key: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedStates(prev => ({ ...prev, [key]: true }));
      setTimeout(() => {
        setCopiedStates(prev => ({ ...prev, [key]: false }));
      }, 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const installationSteps = [
    {
      title: "Prerequisites",
      description: "Before you begin, ensure you have the following installed:",
      items: [
        "Python 3.8 or higher",
        "pip (Python package manager)",
        "Git (for cloning repositories)"
      ]
    },
    {
      title: "Installation",
      description: "Install Insight CLI using pip:",
      command: "pip install insight-cli-sarang",
      commandKey: "install"
    },
    {
      title: "Verify Installation",
      description: "Check if Insight CLI is installed correctly:",
      command: "insight-cli-sarang --version",
      commandKey: "version"
    }
  ];

  const usageExamples = [
    {
      title: "Basic Analysis",
      description: "Analyze the current directory",
      command: "insight-cli-sarang .",
      commandKey: "basic"
    },
    {
      title: "Analyze Specific Directory",
      description: "Analyze a specific project folder",
      command: "insight-cli-sarang /path/to/your/project",
      commandKey: "specific"
    },
    {
      title: "Custom Output File",
      description: "Specify a custom output filename",
      command: "insight-cli-sarang . --output my-report.md",
      commandKey: "output"
    },
    {
      title: "Exclude Files",
      description: "Exclude specific files or patterns",
      command: 'insight-cli-sarang . --exclude "*.test.js" "node_modules/*"',
      commandKey: "exclude"
    },
    {
      title: "Verbose Mode",
      description: "Enable detailed logging",
      command: "insight-cli-sarang . --verbose",
      commandKey: "verbose"
    },
    {
      title: "Help Command",
      description: "View all available options",
      command: "insight-cli-sarang --help",
      commandKey: "help"
    }
  ];

  const advancedFeatures = [
    {
      title: ".insightignore File",
      description: "Create a .insightignore file in your project root to exclude files and directories from analysis. Uses the same syntax as .gitignore.",
      example: `# .insightignore example
node_modules/
*.test.js
dist/
build/
.env
*.log`
    },
    {
      title: "Environment Variables",
      description: "Configure Insight CLI using environment variables for API keys and settings.",
      example: `# Set Google API Key
export GOOGLE_API_KEY="your-api-key-here"

# For Windows
set GOOGLE_API_KEY=your-api-key-here`
    },
    {
      title: "CI/CD Integration",
      description: "Integrate Insight CLI into your continuous integration pipeline.",
      example: `# GitHub Actions example
- name: Run Insight Analysis
  run: |
    pip install insight-cli-sarang
    insight-cli-sarang . --output analysis.md
    
- name: Upload Report
  uses: actions/upload-artifact@v2
  with:
    name: insight-report
    path: analysis.md`
    }
  ];

  return (
    <div className="min-h-screen py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Implementation Guide
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Complete guide to installing, configuring, and using Insight CLI
          </p>
        </div>

        {/* Quick Start */}
        <div className="mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 lg:mb-8 text-white flex items-center flex-wrap">
            <Terminal className="w-7 h-7 sm:w-8 sm:h-8 mr-3 sm:mr-4 text-cyan-400 flex-shrink-0" />
            <span>Quick Start</span>
          </h2>
          <div className="terminal-window">
            <div className="terminal-header">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <span className="text-gray-400 text-sm">Terminal</span>
            </div>
            <div className="terminal-content">
              <div className="terminal-line">
                <span className="text-green-400">$</span>
                <span className="text-white ml-2 typewriter break-all sm:break-normal">pip install insight-cli-sarang</span>
                <button
                  onClick={() => copyToClipboard('pip install insight-cli-sarang', 'quickstart-install')}
                  className="copy-button ml-2 sm:ml-4 flex-shrink-0"
                  title="Copy to clipboard"
                >
                  {copiedStates['quickstart-install'] ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              <div className="terminal-line delay-1">
                <span className="text-green-400">$</span>
                <span className="text-white ml-2 typewriter break-all sm:break-normal">insight-cli-sarang .</span>
                <button
                  onClick={() => copyToClipboard('insight-cli-sarang .', 'quickstart-run')}
                  className="copy-button ml-2 sm:ml-4 flex-shrink-0"
                  title="Copy to clipboard"
                >
                  {copiedStates['quickstart-run'] ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              <div className="terminal-line delay-2">
                <span className="text-cyan-400 typewriter break-all sm:break-normal">✓ Analysis complete! Report saved to insight_report.md</span>
              </div>
            </div>
          </div>
        </div>

        {/* Installation Steps */}
        <div className="mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 lg:mb-8 text-white flex items-center flex-wrap">
            <Download className="w-7 h-7 sm:w-8 sm:h-8 mr-3 sm:mr-4 text-purple-400 flex-shrink-0" />
            <span>Installation Steps</span>
          </h2>
          <div className="space-y-6 lg:space-y-8">
            {installationSteps.map((step, index) => (
              <div key={index} className="feature-card">
                <div className="flex items-start space-x-3 sm:space-x-4 mb-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center text-white font-bold flex-shrink-0 text-sm sm:text-base">
                    {index + 1}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-cyan-400">{step.title}</h3>
                    <p className="text-gray-300 mb-4">{step.description}</p>
                    {step.items && (
                      <ul className="space-y-2 mb-4">
                        {step.items.map((item, idx) => (
                          <li key={idx} className="flex items-center space-x-2 text-gray-300">
                            <ChevronRight className="w-4 h-4 text-cyan-400" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    {step.command && (
                      <div className="terminal-window">
                        <div className="terminal-header">
                          <div className="flex space-x-2">
                            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                          </div>
                          <span className="text-gray-400 text-sm">Terminal</span>
                        </div>
                        <div className="terminal-content">
                          <div className="terminal-line">
                            <span className="text-green-400">$</span>
                            <span className="text-white ml-2 break-all sm:break-normal">{step.command}</span>
                            <button
                              onClick={() => copyToClipboard(step.command!, step.commandKey!)}
                              className="copy-button ml-2 sm:ml-4 flex-shrink-0"
                              title="Copy to clipboard"
                            >
                              {copiedStates[step.commandKey!] ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Virtual Environment Setup */}
        <div className="mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 lg:mb-8 text-white flex items-center flex-wrap">
            <Play className="w-7 h-7 sm:w-8 sm:h-8 mr-3 sm:mr-4 text-pink-400 flex-shrink-0" />
            <span>Virtual Environment (Recommended)</span>
          </h2>
          <div className="feature-card mb-6">
            <div className="flex items-start space-x-3 mb-6 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
              <AlertCircle className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-lg font-semibold text-yellow-400 mb-2">Best Practice</h4>
                <p className="text-gray-300">
                  Using a virtual environment keeps your system Python clean and prevents dependency conflicts.
                </p>
              </div>
            </div>
            
            <div className="os-selector mb-6">
              <button
                onClick={() => setSelectedOS('unix')}
                className={`os-button ${selectedOS === 'unix' ? 'active' : ''}`}
              >
                <Monitor className="w-5 h-5 sm:w-6 sm:h-6 mb-2" />
                <span className="text-sm sm:text-base">macOS / Linux</span>
              </button>
              <button
                onClick={() => setSelectedOS('windows')}
                className={`os-button ${selectedOS === 'windows' ? 'active' : ''}`}
              >
                <Smartphone className="w-5 h-5 sm:w-6 sm:h-6 mb-2" />
                <span className="text-sm sm:text-base">Windows</span>
              </button>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="text-base sm:text-lg font-semibold text-cyan-400 mb-3">1. Create Virtual Environment</h4>
                <div className="terminal-window">
                  <div className="terminal-header">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <span className="text-gray-400 text-sm">Terminal</span>
                  </div>
                  <div className="terminal-content">
                    <div className="terminal-line">
                      <span className="text-green-400">$</span>
                      <span className="text-white ml-2 break-all sm:break-normal">python3 -m venv venv</span>
                      <button
                        onClick={() => copyToClipboard('python3 -m venv venv', 'venv-create')}
                        className="copy-button ml-2 sm:ml-4 flex-shrink-0"
                        title="Copy to clipboard"
                      >
                        {copiedStates['venv-create'] ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-base sm:text-lg font-semibold text-cyan-400 mb-3">2. Activate Virtual Environment</h4>
                <div className="terminal-window">
                  <div className="terminal-header">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <span className="text-gray-400 text-sm">Terminal</span>
                  </div>
                  <div className="terminal-content">
                    <div className="terminal-line">
                      <span className="text-green-400">$</span>
                      <span className="text-white ml-2 break-all sm:break-normal">
                        {selectedOS === 'unix' ? 'source venv/bin/activate' : 'venv\\Scripts\\activate'}
                      </span>
                      <button
                        onClick={() => copyToClipboard(
                          selectedOS === 'unix' ? 'source venv/bin/activate' : 'venv\\Scripts\\activate',
                          'venv-activate'
                        )}
                        className="copy-button ml-2 sm:ml-4 flex-shrink-0"
                        title="Copy to clipboard"
                      >
                        {copiedStates['venv-activate'] ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-base sm:text-lg font-semibold text-cyan-400 mb-3">3. Install Insight CLI</h4>
                <div className="terminal-window">
                  <div className="terminal-header">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <span className="text-gray-400 text-sm">Terminal</span>
                  </div>
                  <div className="terminal-content">
                    <div className="terminal-line">
                      <span className="text-purple-400">(venv)</span>
                      <span className="text-green-400 ml-1">$</span>
                      <span className="text-white ml-2 break-all sm:break-normal">pip install insight-cli-sarang</span>
                      <button
                        onClick={() => copyToClipboard('pip install insight-cli-sarang', 'venv-install')}
                        className="copy-button ml-2 sm:ml-4 flex-shrink-0"
                        title="Copy to clipboard"
                      >
                        {copiedStates['venv-install'] ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* API Key Configuration */}
        <div className="mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 lg:mb-8 text-white flex items-center flex-wrap">
            <Key className="w-7 h-7 sm:w-8 sm:h-8 mr-3 sm:mr-4 text-cyan-400 flex-shrink-0" />
            <span>API Key Configuration</span>
          </h2>
          <div className="feature-card">
            <p className="text-gray-300 mb-6">
              To use AI-powered features, you need to configure your Google API key:
            </p>
            <div className="terminal-window mb-6">
              <div className="terminal-header">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <span className="text-gray-400 text-sm">Terminal</span>
              </div>
              <div className="terminal-content">
                <div className="terminal-line">
                  <span className="text-green-400">$</span>
                  <span className="text-white ml-2 break-all sm:break-normal">export GOOGLE_API_KEY="your-api-key-here"</span>
                  <button
                    onClick={() => copyToClipboard('export GOOGLE_API_KEY="your-api-key-here"', 'api-key')}
                    className="copy-button ml-2 sm:ml-4 flex-shrink-0"
                    title="Copy to clipboard"
                  >
                    {copiedStates['api-key'] ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
                {selectedOS === 'windows' && (
                  <div className="terminal-line delay-1">
                    <span className="text-gray-400 text-sm">Windows:</span>
                    <span className="text-white ml-2 break-all sm:break-normal">set GOOGLE_API_KEY=your-api-key-here</span>
                  </div>
                )}
              </div>
            </div>
            <div className="p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg">
              <p className="text-sm text-blue-400">
                💡 <strong>Tip:</strong> Add this to your shell profile (~/.bashrc, ~/.zshrc, or ~/.bash_profile) to make it persistent across sessions.
              </p>
            </div>
          </div>
        </div>

        {/* Usage Examples */}
        <div className="mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 lg:mb-8 text-white flex items-center flex-wrap">
            <BookOpen className="w-7 h-7 sm:w-8 sm:h-8 mr-3 sm:mr-4 text-purple-400 flex-shrink-0" />
            <span>Usage Examples</span>
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
            {usageExamples.map((example, index) => (
              <div key={index} className="feature-card">
                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-cyan-400">{example.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{example.description}</p>
                <div className="terminal-window">
                  <div className="terminal-header">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <span className="text-gray-400 text-sm">Terminal</span>
                  </div>
                  <div className="terminal-content">
                    <div className="terminal-line">
                      <span className="text-green-400">$</span>
                      <span className="text-white ml-2 text-xs sm:text-sm break-all">{example.command}</span>
                      <button
                        onClick={() => copyToClipboard(example.command, example.commandKey)}
                        className="copy-button ml-2 sm:ml-4 flex-shrink-0"
                        title="Copy to clipboard"
                      >
                        {copiedStates[example.commandKey] ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Advanced Features */}
        <div className="mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 lg:mb-8 text-white">
            Advanced Configuration
          </h2>
          <div className="space-y-6 lg:space-y-8">
            {advancedFeatures.map((feature, index) => (
              <div key={index} className="feature-card">
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-purple-400">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <div className="terminal-window">
                  <div className="terminal-header">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <span className="text-gray-400 text-sm">Code</span>
                  </div>
                  <div className="terminal-content">
                    <pre className="text-xs sm:text-sm text-gray-300 overflow-x-auto whitespace-pre-wrap break-words">
                      <code>{feature.example}</code>
                    </pre>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Troubleshooting */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 lg:mb-8 text-white">
            Troubleshooting
          </h2>
          <div className="space-y-6">
            <div className="feature-card">
              <h3 className="text-lg sm:text-xl font-semibold mb-3 text-cyan-400">Command not found</h3>
              <p className="text-gray-300 mb-3">
                If you get a "command not found" error, ensure pip's bin directory is in your PATH:
              </p>
              <div className="terminal-window">
                <div className="terminal-header">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-gray-400 text-sm">Terminal</span>
                </div>
                <div className="terminal-content">
                  <div className="terminal-line">
                    <span className="text-green-400">$</span>
                    <span className="text-white ml-2 break-all sm:break-normal">export PATH="$HOME/.local/bin:$PATH"</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="feature-card">
              <h3 className="text-lg sm:text-xl font-semibold mb-3 text-cyan-400">Permission denied</h3>
              <p className="text-gray-300 mb-3">
                If you encounter permission errors, try installing with the --user flag:
              </p>
              <div className="terminal-window">
                <div className="terminal-header">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-gray-400 text-sm">Terminal</span>
                </div>
                <div className="terminal-content">
                  <div className="terminal-line">
                    <span className="text-green-400">$</span>
                    <span className="text-white ml-2 break-all sm:break-normal">pip install --user insight-cli-sarang</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="feature-card">
              <h3 className="text-lg sm:text-xl font-semibold mb-3 text-cyan-400">API key issues</h3>
              <p className="text-gray-300 mb-3">
                If AI features aren't working, verify your API key is set correctly by running:
              </p>
              <div className="terminal-window">
                <div className="terminal-header">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-gray-400 text-sm">Terminal</span>
                </div>
                <div className="terminal-content">
                  <div className="terminal-line">
                    <span className="text-green-400">$</span>
                    <span className="text-white ml-2 break-all sm:break-normal">echo $GOOGLE_API_KEY</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Implementation;
