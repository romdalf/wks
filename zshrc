eval "$(starship init zsh)"

# Initialize completion
source $HOME/.zsh/completion.zsh
autoload -Uz compinit

# Cache completion if nothing changed - faster startup time
typeset -i updated_at=$(date +'%j' -r ~/.zcompdump 2>/dev/null || stat -f '%Sm' -t '%j' ~/.zcompdump 2>/dev/null)
if [ $(date +'%j') != $updated_at ]; then
  compinit -i
else
  compinit -C -i
fi

# Enhanced form of menu completion called `menu selection'
zmodload -i zsh/complist

# Enable history 
source $HOME/.zsh/history.zsh

alias ls='ls -G'
alias grep='grep --color=auto'
alias less='less -R'
alias k='kubectl' 
alias ka='kubectl apply -f'
alias kd='kubectl delete -f'
alias kpod='kubectl get pod'
alias kpvc='kubectl get pvc'
alias gc='git add --all . && git commit -m'
alias gp='git push'


# The next line updates PATH for the Google Cloud SDK.
# if [ -f '/Users/rovandep/Downloads/anthos/minectl/google-cloud-sdk/path.zsh.inc' ]; then . '/Users/rovandep/Downloads/anthos/minectl/google-cloud-sdk/path.zsh.inc'; fi

# The next line enables shell command completion for gcloud.
# if [ -f '/Users/rovandep/Downloads/anthos/minectl/google-cloud-sdk/completion.zsh.inc' ]; then . '/Users/rovandep/Downloads/anthos/minectl/google-cloud-sdk/completion.zsh.inc'; fi

autoload -U +X bashcompinit && bashcompinit
complete -o nospace -C /opt/homebrew/bin/terraform terraform
export PATH="/opt/homebrew/opt/node@14/bin:$PATH"
