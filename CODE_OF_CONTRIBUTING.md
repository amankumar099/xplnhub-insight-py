# Contributing to Insight-Py

Thank you for your interest in contributing to **Insight-Py**.
We welcome contributions of all kinds — bug fixes, features, documentation, or ideas.

---

## Getting Started

### 1. Fork and Clone the Repository

```bash
git fork https://github.com/XplnHUB/Insight-Py.git
cd Insight-Py
```

### 2. Set Up a Virtual Environment

**macOS / Linux**

```bash
python3 -m venv venv
source venv/bin/activate
```

**Windows**

```bash
python -m venv venv
venv\Scripts\activate
```

### 3. Install Dependencies

```bash
pip install -r requirements.txt
```

### 4. Install the CLI in Editable Mode

```bash
pip install -e .
```

---

## Development Workflow

1. Create a new branch for your work:

   ```bash
   git checkout -b feature/my-feature
   ```

2. Make your changes in code or documentation.

   * Follow [PEP8](https://peps.python.org/pep-0008/) for Python code style.
   * Write clear commit messages using prefixes like `fix:`, `feat:`, `docs:`, or `refactor:`.

3. Run tests (if available):

   ```bash
   pytest
   ```

4. Push your branch and open a Pull Request (PR):

   ```bash
   git push origin feature/my-feature
   ```

---

## Testing Your Changes

You can test the CLI locally on any project:

```bash
insight-cli . --verbose
```

Reports will be saved as `insight_report.md`.

---

## Contribution Guidelines

* Keep PRs small and focused on a single change.
* Update or add documentation when needed.
* If adding support for new file types, update both:

  * File parsing logic.
  * Tests and documentation (`Supported File Types` section in README).
* Use issues to propose large features before starting work.

---

## Good First Issues

If you are new, check the [Good First Issue](https://github.com/XplnHUB/Insight-Py/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22) label in the issues tab.

Some easy contributions include:

* Improving CLI help text.
* Adding support for new file extensions.
* Fixing typos or improving documentation.
* Enhancing Markdown report formatting.

---

## Roadmap for Contributors

* Q2 2025: HTML and PDF Export (In Progress)
* Q3 2025: Local AI Engines (Planned)
* Q4 2025: Interactive Dashboard (Planned)
* Q1 2026: Cloud Sync and Collaboration (Planned)
* Q2 2026: VSCode Extension (Planned)

If you would like to take ownership of a roadmap item, please comment in the related issue.

---

## License

By contributing, you agree that your contributions will be licensed under the **MIT License**.

---

## Getting Help

* Open an issue on GitHub.
* Reach out through our community discussions.
