# Portfolio Deployment – Raspberry Pi CI/CD

This repository is automatically deployed to a self-hosted **Raspberry Pi web server** using **GitHub Actions** and **Nginx**.
Every push to the `main` branch triggers a workflow that builds and exports the Next.js app, then deploys it via SSH.

---

## Deployment Overview

- **Framework:** Next.js (static export)
- **Server:** Raspberry Pi running Nginx + Let’s Encrypt (HTTPS)
- **Automation:** GitHub Actions → SSH + `rsync`
- **Trigger:** Any push to `main`

---

## Setup Notes (for Future Reference)

### GitHub Secrets

The following secrets are configured in the repository settings under
**Settings → Secrets and Variables → Actions**:

| Secret | Description |
|--------|--------------|
| `PI_HOST` | Public IP or domain of the Raspberry Pi |
| `PI_PORT` | Custom SSH port (forwarded through router) |
| `PI_USER` | SSH username on the Pi |
| `PI_TARGET_PATH` | Full web root path on the Pi |
| `PI_SSH_KEY` | Private SSH key used for authentication |

## SSL Certificate Renewal (Manual DNS Challenge)

Because port **80** is blocked by ISP, SSL certificates for
**michaelsollazzo.dev** are renewed manually using the **DNS challenge** method.

---

### Steps to Renew Certificates

1. **SSH into the Raspberry Pi**
   ```bash
   ssh -p <PORT> <USER>@<HOST>
   ```
2. **Run the manual Certbot command**
   ```bash
   sudo certbot certonly --manual --preferred-challenges dns -d michaelsollazzo.dev -d www.michaelsollazzo.dev
   ```

