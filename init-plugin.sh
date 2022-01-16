#!/bin/bash
# Usage: ./vue-wp-plugin-starter/init-plugin.sh

# Check for valid plugin name.
function valid_name () {
  valid="^[A-Z][A-Za-z0-9]*( [A-Z][A-Za-z0-9]*)*$"

  if [[ ! "$1" =~ $valid ]]; then
    return 1
  fi

  return 0
}

echo
echo "Hello, "$USER"."
echo
echo "This script will automatically generate a new plugin based on the scaffolding."
echo "The way it works is you enter a plugin name like 'Hello World' and the script "
echo "will create a directory 'hello-world' in the current working directory, or one "
echo "directory up if called from the plugin root, all while performing substitutions "
echo "on the 'vue-wp-plugin-starter' scaffolding plugin."
echo

echo -n "Enter your plugin name and press [ENTER]: "
read name

# Validate plugin name.
if ! valid_name "$name"; then
  echo "Malformed name '$name'. Please use title case words separated by spaces. No hyphens. For example, 'Hello World'."
  echo
  echo -n "Enter a valid plugin name and press [ENTER]: "
  read name

  if ! valid_name "$name"; then
    echo
    echo "The name you entered is invalid, rage quitting."
    exit 1
  fi
fi

slug="$( echo "$name" | tr '[:upper:]' '[:lower:]' | sed 's/ /-/g' )"
prefix="$( echo "$name" | tr '[:upper:]' '[:lower:]' | sed 's/ /_/g' )"
namespace="$(echo "$name" | sed 's/ //')"
repo="$slug"

echo -n "Do you want to prepend 'wp-' to your repository name? [Y/N]: "
read prepend

if [[ "$prepend" != Y ]] && [[ "$prepend" != y ]]; then
  echo
  echo -n "Do you want to append '-wp' to your repository name? [Y/N]: "
    read append

  if [[ "$append" == Y ]] || [[ "$append" == y ]]; then
    repo="${slug}-wp"
  fi
else
  repo="wp-${slug}"
fi


echo 'Initializing $repo.php'
cp vue-wp-plugin-starter.php "$repo.php"
sed -e "s/PLUGIN_NAME/$name/g" "$repo.php" > "$repo.php"

echo 'Initializing package.json'
sed -e "s/PLUGIN_NAME/$repo/g" package.json > package.json

echo 'Initializing readme.txt'
sed -e "s/PLUGIN_NAME/$name/g" readme.txt > readme.txt

echo 'Initializing *.php namespace'
while read -d '' filename; do
  sed -e "s/Baseapp/$namespace/g" "${filename}" >  "${filename}"
done < <(find . -type d \( -path ./node_modules -o -path ./vendor -o -path ./.git \) -prune -o -name '*.php' -print0)

echo 'Initializing *.php prefix'
while read -d '' filename; do
  sed -e "s/baseapp/$prefix/g" "${filename}" >  "${filename}"
done < <(find . -type d \( -path ./node_modules -o -path ./vendor -o -path ./.git \) -prune -o -name '*.php' -print0)
