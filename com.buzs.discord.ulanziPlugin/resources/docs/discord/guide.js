const REDIRECT_URI = "http://localhost:30910";

const translations = {
  en: {
    name: "English",
    eyebrow: "Local setup guide",
    title: "Connect Discord Enhanced",
    lead: "Use Discord Desktop voice and channel controls from your Ulanzi Deck.",
    language: "Language",
    accessTitle: "Important: Discord RPC access is restricted",
    accessBody: "Discord requires RPC applications to be approved or to have the user listed as a tester. Publishing a Client Secret does not remove this restriction and would expose a credential, so this plugin never ships the author's secret.",
    redirectTitle: "Redirect URI",
    redirectIntro: "Add this exact URI to your Discord Developer application:",
    copy: "Copy",
    copied: "Copied",
    redirectFallback: "The URI must match exactly, including the protocol and port.",
    stepsTitle: "Create your Discord application",
    developerPortal: "Open Discord Developer Portal",
    connectTitle: "Connect in Ulanzi",
    privacyTitle: "Privacy and credentials",
    requirementsTitle: "Requirements",
    requirementsBody: "Discord Desktop must be installed and running. This plugin communicates with the local Discord RPC service and stores your Client Secret encrypted in the installed plugin data folder. Camera and screen sharing also request Discord's private rpc.video.* and rpc.screenshare.* permissions.",
    privacyBody: "Your Client ID and Client Secret stay on this computer. Do not paste a secret into a public issue, repository or screenshot. Rotate it in the Discord Developer Portal if it is exposed.",
    troubleTitle: "Troubleshooting",
    officialGuide: "Read the official Ulanzi Discord guide",
    footer: "This page is bundled with Discord Enhanced and works offline. Discord trademarks belong to Discord Inc.",
    steps: [
      "Open the Discord Developer Portal and sign in.",
      "Click New Application and choose any name, such as Discord Enhanced for Ulanzi.",
      "Open OAuth2 and add the Redirect URI shown above.",
      "Copy the Client ID and use Reset Secret to create a current Client Secret.",
      "If the application is not approved for RPC, add the people who will use it as testers in the Developer Portal."
    ],
    connectSteps: [
      "Open any Discord Enhanced action settings panel in Ulanzi.",
      "Paste the Client ID and Client Secret, then click Connect.",
      "Approve the Discord authorization prompt. Keep Discord Desktop open.",
      "Choose a server, channel or device when an action needs extra settings, then click Confirm."
    ],
    troubleshooting: [
      "invalid_client: Client ID and Client Secret do not belong to the same application, or the secret was rotated.",
      "RPC access denied: the Discord application needs approval or the current Discord account must be listed as a tester.",
      "Discord is not running: fully open or restart Discord Desktop, then use Reconnect.",
      "Camera or screen sharing is unavailable: these actions use private Discord RPC commands and may be rejected by your client version.",
      "Secret exposed: reset it in the Developer Portal and use Change app in the settings panel."
    ]
  },
  pt_BR: {
    name: "Português (Brasil)",
    eyebrow: "Guia local de configuração",
    title: "Conectar o Discord Enhanced",
    lead: "Use os controles de voz e canais do Discord pelo seu Ulanzi Deck.",
    language: "Idioma",
    accessTitle: "Importante: o acesso ao Discord RPC é restrito",
    accessBody: "O Discord exige que aplicações RPC sejam aprovadas ou que o usuário esteja cadastrado como tester. Publicar um Client Secret não remove essa restrição e vazaria uma credencial, por isso este plugin nunca distribui o secret do autor.",
    redirectTitle: "URI de redirecionamento",
    redirectIntro: "Adicione esta URI exatamente ao seu app no Discord Developer:",
    copy: "Copiar",
    copied: "Copiado",
    redirectFallback: "A URI precisa ser idêntica, incluindo o protocolo e a porta.",
    stepsTitle: "Criar seu app no Discord",
    developerPortal: "Abrir Discord Developer Portal",
    connectTitle: "Conectar na Ulanzi",
    privacyTitle: "Privacidade e credenciais",
    requirementsTitle: "Requisitos",
    requirementsBody: "O Discord Desktop precisa estar instalado e aberto. Este plugin fala com o RPC local do Discord e salva o Client Secret criptografado na pasta de dados do plugin instalado. Câmera e compartilhamento de tela também solicitam as permissões privadas rpc.video.* e rpc.screenshare.* do Discord.",
    privacyBody: "Seu Client ID e Client Secret ficam neste computador. Nunca cole um secret em issue, repositório ou captura de tela pública. Se ele for exposto, redefina-o no Discord Developer Portal.",
    troubleTitle: "Solução de problemas",
    officialGuide: "Ler o guia oficial da Ulanzi para Discord",
    footer: "Esta página vem junto com o Discord Enhanced e funciona offline. As marcas Discord pertencem à Discord Inc.",
    steps: [
      "Abra o Discord Developer Portal e entre na sua conta.",
      "Clique em New Application e escolha um nome, por exemplo Discord Enhanced for Ulanzi.",
      "Abra OAuth2 e adicione a URI de redirecionamento mostrada acima.",
      "Copie o Client ID e use Reset Secret para criar um Client Secret atual.",
      "Se o app não for aprovado para RPC, cadastre no Developer Portal as pessoas que vão usá-lo como testers."
    ],
    connectSteps: [
      "Abra as configurações de qualquer ação Discord Enhanced na Ulanzi.",
      "Cole o Client ID e o Client Secret e clique em Connect.",
      "Aprove a autorização no Discord. Mantenha o Discord Desktop aberto.",
      "Escolha servidor, canal ou dispositivo quando uma ação exigir configurações extras e clique em Confirm."
    ],
    troubleshooting: [
      "invalid_client: o Client ID e o Client Secret não são do mesmo app, ou o secret foi redefinido.",
      "Acesso RPC negado: o app Discord precisa ser aprovado ou a conta atual precisa estar cadastrada como tester.",
      "Discord fechado: abra ou reinicie completamente o Discord Desktop e use Reconnect.",
      "Câmera ou compartilhamento indisponível: essas ações usam comandos RPC privados e podem ser rejeitadas pela versão do seu cliente.",
      "Secret exposto: redefina-o no Developer Portal e use Change app no painel de configurações."
    ]
  }
};

const withLocale = (name, values) => ({ ...translations.en, name, ...values });
Object.assign(translations, {
  de_DE: withLocale("Deutsch", {
    eyebrow: "Lokale Einrichtungsanleitung", title: "Discord Enhanced verbinden", lead: "Steuere Discord-Sprachkanäle und Kanäle über dein Ulanzi Deck.", language: "Sprache",
    accessTitle: "Wichtig: Discord-RPC-Zugriff ist eingeschränkt", accessBody: "Discord verlangt die Genehmigung von RPC-Apps oder eine Eintragung als Tester. Ein veröffentlichtes Client-Secret hebt diese Einschränkung nicht auf und würde ein Zugangsdatenleck verursachen.",
    redirectTitle: "Redirect URI", redirectIntro: "Füge diese genaue URI zu deiner Discord Developer-App hinzu:", copy: "Kopieren", copied: "Kopiert", redirectFallback: "Die URI muss einschließlich Protokoll und Port exakt übereinstimmen.",
    stepsTitle: "Discord-App erstellen", developerPortal: "Discord Developer Portal öffnen", connectTitle: "In Ulanzi verbinden", privacyTitle: "Datenschutz und Zugangsdaten", requirementsTitle: "Voraussetzungen",
    requirementsBody: "Discord Desktop muss installiert und geöffnet sein. Das Plugin verwendet lokales Discord RPC und speichert dein Client-Secret verschlüsselt. Kamera und Bildschirmfreigabe verwenden private rpc.video.*- und rpc.screenshare.*-Berechtigungen.",
    privacyBody: "Client ID und Client Secret bleiben auf diesem Computer. Veröffentliche das Secret nicht. Setze es im Developer Portal zurück, wenn es offengelegt wurde.", troubleTitle: "Fehlerbehebung", officialGuide: "Offizielle Ulanzi-Anleitung lesen", footer: "Diese Seite ist in Discord Enhanced enthalten und funktioniert offline. Discord-Marken gehören Discord Inc.",
    steps: ["Öffne das Discord Developer Portal und melde dich an.", "Klicke auf New Application und wähle einen Namen.", "Öffne OAuth2 und füge die oben angezeigte Redirect URI hinzu.", "Kopiere die Client ID und erstelle mit Reset Secret ein aktuelles Client Secret.", "Füge Benutzer als Tester hinzu, wenn die RPC-App noch nicht genehmigt ist."],
    connectSteps: ["Öffne die Einstellungen einer Discord Enhanced-Aktion in Ulanzi.", "Füge Client ID und Client Secret ein und klicke auf Verbinden.", "Bestätige die Discord-Autorisierung und halte Discord Desktop geöffnet.", "Wähle Server, Kanal oder Gerät und klicke auf Bestätigen."],
    troubleshooting: ["invalid_client: Client ID und Secret stammen nicht aus derselben App oder das Secret wurde zurückgesetzt.", "RPC-Zugriff verweigert: Die App braucht Genehmigung oder dein Konto muss Tester sein.", "Discord geschlossen: Öffne Discord Desktop neu und versuche es erneut.", "Kamera/Bildschirmfreigabe verwendet private RPC-Befehle und kann je nach Version fehlschlagen.", "Offengelegtes Secret: Setze es zurück und verwende App ändern."]
  }),
  es_ES: withLocale("Español", {
    eyebrow: "Guía de configuración local", title: "Conectar Discord Enhanced", lead: "Controla la voz y los canales de Discord desde tu Ulanzi Deck.", language: "Idioma",
    accessTitle: "Importante: el acceso RPC de Discord está restringido", accessBody: "Discord exige que las aplicaciones RPC sean aprobadas o que el usuario sea tester. Publicar un Client Secret no elimina esta restricción y expondría una credencial.",
    redirectTitle: "URI de redirección", redirectIntro: "Añade exactamente esta URI a tu aplicación de Discord:", copy: "Copiar", copied: "Copiado", redirectFallback: "La URI debe coincidir exactamente, incluido el protocolo y el puerto.",
    stepsTitle: "Crear la aplicación de Discord", developerPortal: "Abrir Discord Developer Portal", connectTitle: "Conectar en Ulanzi", privacyTitle: "Privacidad y credenciales", requirementsTitle: "Requisitos",
    requirementsBody: "Discord Desktop debe estar instalado y abierto. El plugin usa el RPC local de Discord y guarda el Client Secret cifrado. La cámara y la pantalla solicitan permisos privados rpc.video.* y rpc.screenshare.*.",
    privacyBody: "El Client ID y el Client Secret permanecen en este equipo. No publiques el Secret. Restablécelo en el Developer Portal si se expone.", troubleTitle: "Solución de problemas", officialGuide: "Leer la guía oficial de Ulanzi", footer: "Esta página está incluida con Discord Enhanced y funciona sin conexión. Las marcas Discord pertenecen a Discord Inc.",
    steps: ["Abre Discord Developer Portal e inicia sesión.", "Haz clic en New Application y elige un nombre.", "Abre OAuth2 y añade la URI de redirección mostrada arriba.", "Copia el Client ID y crea un Client Secret actual con Reset Secret.", "Añade a los usuarios como testers si la aplicación RPC no está aprobada."],
    connectSteps: ["Abre los ajustes de una acción Discord Enhanced en Ulanzi.", "Pega el Client ID y el Client Secret y pulsa Conectar.", "Aprueba la autorización de Discord y mantén Discord Desktop abierto.", "Elige servidor, canal o dispositivo y pulsa Confirmar."],
    troubleshooting: ["invalid_client: el ID y el Secret no son de la misma aplicación o el Secret fue restablecido.", "Acceso RPC denegado: la aplicación necesita aprobación o tu cuenta debe ser tester.", "Discord cerrado: reinicia Discord Desktop y vuelve a intentarlo.", "La cámara/pantalla usa comandos RPC privados y puede fallar según la versión.", "Secret expuesto: restablécelo y usa Cambiar aplicación."]
  }),
  ja_JP: withLocale("日本語", {
    eyebrow: "ローカル設定ガイド", title: "Discord Enhanced に接続", lead: "Ulanzi DeckからDiscordの音声とチャンネルを操作します。", language: "言語",
    accessTitle: "重要: Discord RPCアクセスには制限があります", accessBody: "Discord RPCアプリは承認されるか、ユーザーをtesterとして登録する必要があります。Client Secretを公開しても制限は解除されず、認証情報が漏えいします。",
    redirectTitle: "リダイレクトURI", redirectIntro: "次のURIをDiscord Developerアプリに正確に追加してください:", copy: "コピー", copied: "コピーしました", redirectFallback: "プロトコルとポートを含めて完全に一致させてください。",
    stepsTitle: "Discordアプリを作成", developerPortal: "Discord Developer Portalを開く", connectTitle: "Ulanziで接続", privacyTitle: "プライバシーと認証情報", requirementsTitle: "必要条件",
    requirementsBody: "Discord Desktopをインストールして起動してください。Client Secretは暗号化して保存されます。カメラと画面共有にはprivateなrpc.video.*とrpc.screenshare.*権限が必要です。",
    privacyBody: "Client IDとClient SecretはこのPC内に保存されます。Secretを公開しないでください。漏えいした場合はDeveloper Portalでリセットしてください。", troubleTitle: "トラブルシューティング", officialGuide: "Ulanzi公式ガイドを読む", footer: "このページはDiscord Enhancedに同梱され、オフラインで動作します。Discordの商標はDiscord Inc.に帰属します。",
    steps: ["Discord Developer Portalを開いてログインします。", "New Applicationをクリックして名前を設定します。", "OAuth2を開き、上記のRedirect URIを追加します。", "Client IDをコピーし、Reset Secretで現在のClient Secretを作成します。", "RPCアプリが未承認の場合は利用者をtesterとして登録します。"],
    connectSteps: ["UlanziでDiscord Enhancedアクションの設定を開きます。", "Client IDとClient Secretを貼り付けて接続を押します。", "Discordの認証を許可し、Discord Desktopを起動したままにします。", "サーバー、チャンネル、デバイスを選択して確認を押します。"],
    troubleshooting: ["invalid_client: IDとSecretが同じアプリのものか確認してください。", "RPC拒否: アプリの承認またはtester登録が必要です。", "Discord未起動: Discord Desktopを再起動してください。", "カメラ/画面共有はprivate RPCコマンドのためバージョンにより失敗します。", "Secret漏えい: リセットしてアプリを変更してください。"]
  }),
  ko_KR: withLocale("한국어", {
    eyebrow: "로컬 설정 가이드", title: "Discord Enhanced 연결", lead: "Ulanzi Deck에서 Discord 음성 및 채널을 제어합니다.", language: "언어",
    accessTitle: "중요: Discord RPC 액세스는 제한됩니다", accessBody: "Discord RPC 앱은 승인되거나 사용자가 tester로 등록되어야 합니다. Client Secret을 공개해도 제한은 사라지지 않으며 자격 증명이 노출됩니다.",
    redirectTitle: "리디렉션 URI", redirectIntro: "다음 URI를 Discord Developer 앱에 정확히 추가하세요:", copy: "복사", copied: "복사됨", redirectFallback: "프로토콜과 포트를 포함해 정확히 일치해야 합니다.",
    stepsTitle: "Discord 앱 만들기", developerPortal: "Discord Developer Portal 열기", connectTitle: "Ulanzi에서 연결", privacyTitle: "개인정보 및 자격 증명", requirementsTitle: "요구 사항",
    requirementsBody: "Discord Desktop을 설치하고 실행하세요. Client Secret은 암호화되어 저장됩니다. 카메라와 화면 공유에는 비공개 rpc.video.* 및 rpc.screenshare.* 권한이 필요합니다.",
    privacyBody: "Client ID와 Client Secret은 이 컴퓨터에만 저장됩니다. Secret을 공개하지 말고 노출되면 Developer Portal에서 재설정하세요.", troubleTitle: "문제 해결", officialGuide: "Ulanzi 공식 가이드 읽기", footer: "이 페이지는 Discord Enhanced에 포함되어 오프라인에서 작동합니다. Discord 상표는 Discord Inc.의 소유입니다.",
    steps: ["Discord Developer Portal을 열고 로그인합니다.", "New Application을 클릭하고 이름을 정합니다.", "OAuth2에서 위의 Redirect URI를 추가합니다.", "Client ID를 복사하고 Reset Secret으로 현재 Client Secret을 만듭니다.", "RPC 앱이 승인되지 않았다면 사용자를 tester로 등록합니다."],
    connectSteps: ["Ulanzi에서 Discord Enhanced 액션 설정을 엽니다.", "Client ID와 Client Secret을 입력하고 연결을 누릅니다.", "Discord 인증을 승인하고 Discord Desktop을 실행 상태로 둡니다.", "서버, 채널 또는 장치를 선택하고 확인을 누릅니다."],
    troubleshooting: ["invalid_client: ID와 Secret이 같은 앱인지 확인하세요.", "RPC 거부: 앱 승인 또는 tester 등록이 필요합니다.", "Discord가 꺼짐: Discord Desktop을 다시 시작하세요.", "카메라/화면 공유는 비공개 RPC 명령이므로 버전에 따라 실패할 수 있습니다.", "Secret 노출: 재설정 후 앱 변경을 사용하세요."]
  }),
  pt_PT: withLocale("Português (Portugal)", {
    eyebrow: "Guia local de configuração", title: "Ligar o Discord Enhanced", lead: "Controla a voz e os canais do Discord através do teu Ulanzi Deck.", language: "Idioma",
    accessTitle: "Importante: o acesso ao Discord RPC é restrito", accessBody: "As aplicações RPC do Discord têm de ser aprovadas ou o utilizador tem de estar registado como tester. Publicar o Client Secret não remove esta restrição e expõe uma credencial.",
    redirectTitle: "URI de redirecionamento", redirectIntro: "Adiciona exatamente esta URI à tua aplicação Discord Developer:", copy: "Copiar", copied: "Copiado", redirectFallback: "A URI tem de coincidir exatamente, incluindo o protocolo e a porta.",
    stepsTitle: "Criar a aplicação Discord", developerPortal: "Abrir Discord Developer Portal", connectTitle: "Ligar na Ulanzi", privacyTitle: "Privacidade e credenciais", requirementsTitle: "Requisitos",
    requirementsBody: "O Discord Desktop tem de estar instalado e aberto. O Client Secret é guardado cifrado. A câmara e a partilha de ecrã usam as permissões privadas rpc.video.* e rpc.screenshare.*.",
    privacyBody: "O Client ID e o Client Secret ficam neste computador. Não publiques o Secret. Se for exposto, redefine-o no Developer Portal.", troubleTitle: "Resolução de problemas", officialGuide: "Ler o guia oficial da Ulanzi", footer: "Esta página vem incluída no Discord Enhanced e funciona offline. As marcas Discord pertencem à Discord Inc.",
    steps: ["Abre o Discord Developer Portal e inicia sessão.", "Clica em New Application e escolhe um nome.", "Abre OAuth2 e adiciona a Redirect URI acima.", "Copia o Client ID e cria um Client Secret atual com Reset Secret.", "Adiciona os utilizadores como testers se a aplicação RPC não estiver aprovada."],
    connectSteps: ["Abre as definições de uma ação Discord Enhanced na Ulanzi.", "Cola o Client ID e o Client Secret e clica em Ligar.", "Aprova a autorização do Discord e mantém o Discord Desktop aberto.", "Escolhe o servidor, canal ou dispositivo e clica em Confirmar."],
    troubleshooting: ["invalid_client: confirma que o ID e o Secret pertencem à mesma aplicação.", "Acesso RPC recusado: a aplicação precisa de aprovação ou a conta precisa de ser tester.", "Discord fechado: reinicia o Discord Desktop.", "Câmara/ecrã usam comandos RPC privados e podem falhar conforme a versão.", "Secret exposto: redefine-o e usa Trocar app."]
  }),
  zh_CN: withLocale("简体中文", {
    eyebrow: "本地设置指南", title: "连接 Discord Enhanced", lead: "通过 Ulanzi Deck 控制 Discord 语音和频道。", language: "语言",
    accessTitle: "重要：Discord RPC 访问受限", accessBody: "Discord RPC 应用需要获得批准，或将用户列为 tester。公开 Client Secret 不会解除限制，还会暴露凭据。",
    redirectTitle: "重定向 URI", redirectIntro: "将以下 URI 完整添加到 Discord Developer 应用：", copy: "复制", copied: "已复制", redirectFallback: "URI 必须完全一致，包括协议和端口。",
    stepsTitle: "创建 Discord 应用", developerPortal: "打开 Discord Developer Portal", connectTitle: "在 Ulanzi 中连接", privacyTitle: "隐私和凭据", requirementsTitle: "要求",
    requirementsBody: "必须安装并运行 Discord Desktop。Client Secret 会加密保存。摄像头和屏幕共享需要私有 rpc.video.* 和 rpc.screenshare.* 权限。",
    privacyBody: "Client ID 和 Client Secret 只保存在此电脑上。不要公开 Secret；如果泄露，请在 Developer Portal 中重置。", troubleTitle: "故障排除", officialGuide: "阅读 Ulanzi 官方指南", footer: "此页面随 Discord Enhanced 提供并支持离线使用。Discord 商标归 Discord Inc. 所有。",
    steps: ["打开 Discord Developer Portal 并登录。", "点击 New Application 并设置名称。", "打开 OAuth2，添加上方的 Redirect URI。", "复制 Client ID，并使用 Reset Secret 创建当前 Client Secret。", "如果 RPC 应用尚未批准，请将用户添加为 tester。"],
    connectSteps: ["在 Ulanzi 中打开 Discord Enhanced 操作设置。", "粘贴 Client ID 和 Client Secret，然后点击连接。", "批准 Discord 授权并保持 Discord Desktop 运行。", "选择服务器、频道或设备，然后点击确认。"],
    troubleshooting: ["invalid_client：确认 ID 和 Secret 来自同一个应用。", "RPC 被拒绝：应用需要批准或账号需要列为 tester。", "Discord 未运行：重启 Discord Desktop。", "摄像头/屏幕共享使用私有 RPC 命令，可能因版本而失败。", "Secret 泄露：重置后使用更换应用。"]
  }),
  zh_HK: withLocale("繁體中文", {
    eyebrow: "本機設定指南", title: "連接 Discord Enhanced", lead: "透過 Ulanzi Deck 控制 Discord 語音和頻道。", language: "語言",
    accessTitle: "重要：Discord RPC 存取受到限制", accessBody: "Discord RPC 應用程式需要獲得批准，或將使用者列為 tester。公開 Client Secret 不會解除限制，反而會洩露憑證。",
    redirectTitle: "重新導向 URI", redirectIntro: "將以下 URI 完整加入 Discord Developer 應用程式：", copy: "複製", copied: "已複製", redirectFallback: "URI 必須完全一致，包括通訊協定和連接埠。",
    stepsTitle: "建立 Discord 應用程式", developerPortal: "開啟 Discord Developer Portal", connectTitle: "在 Ulanzi 中連接", privacyTitle: "私隱和憑證", requirementsTitle: "要求",
    requirementsBody: "必須安裝並執行 Discord Desktop。Client Secret 會加密儲存。攝影機和螢幕分享需要私有 rpc.video.* 和 rpc.screenshare.* 權限。",
    privacyBody: "Client ID 和 Client Secret 只會儲存在此電腦。不要公開 Secret；如已洩露，請在 Developer Portal 重設。", troubleTitle: "疑難排解", officialGuide: "閱讀 Ulanzi 官方指南", footer: "此頁面隨 Discord Enhanced 提供並支援離線使用。Discord 商標屬於 Discord Inc.。",
    steps: ["開啟 Discord Developer Portal 並登入。", "按一下 New Application 並設定名稱。", "開啟 OAuth2，加入上方的 Redirect URI。", "複製 Client ID，並使用 Reset Secret 建立目前的 Client Secret。", "如 RPC 應用程式尚未獲批准，請將使用者加入 tester。"],
    connectSteps: ["在 Ulanzi 開啟 Discord Enhanced 動作設定。", "貼上 Client ID 和 Client Secret，然後按一下連接。", "批准 Discord 授權並保持 Discord Desktop 執行。", "選擇伺服器、頻道或裝置，然後按一下確認。"],
    troubleshooting: ["invalid_client：確認 ID 和 Secret 來自同一個應用程式。", "RPC 被拒絕：應用程式需要批准或帳戶需要列為 tester。", "Discord 未執行：重新啟動 Discord Desktop。", "攝影機/螢幕分享使用私有 RPC 指令，可能因版本而失敗。", "Secret 洩露：重設後使用更換應用程式。"]
  })
});

const localeNames = Object.fromEntries(Object.entries(translations).map(([key, value]) => [key, value.name]));
const queryLocale = new URLSearchParams(location.search).get("lang");
const browserLocale = navigator.language.toLowerCase().replace(/_/g, "-");
const browserLocaleMap = { de: "de_DE", es: "es_ES", ja: "ja_JP", ko: "ko_KR", pt: "pt_BR", "pt-pt": "pt_PT", zh: "zh_CN", "zh-cn": "zh_CN", "zh-hans": "zh_CN", "zh-hk": "zh_HK", "zh-tw": "zh_HK", "zh-hant": "zh_HK" };
const initialLocale = translations[queryLocale] ? queryLocale : (browserLocaleMap[browserLocale] || browserLocaleMap[browserLocale.split("-")[0]] || "en");
const language = document.querySelector("#language");

for (const [key, name] of Object.entries(localeNames)) {
  const option = document.createElement("option");
  option.value = key;
  option.textContent = name;
  language.appendChild(option);
}

language.value = initialLocale;
language.addEventListener("change", () => render(language.value));
document.querySelector("#copy").addEventListener("click", async (event) => {
  const button = event.currentTarget;
  try {
    await navigator.clipboard?.writeText(REDIRECT_URI);
  } catch {}
  button.textContent = translations[language.value].copied;
  setTimeout(() => { button.textContent = translations[language.value].copy; }, 1600);
});

function render(locale) {
  const text = translations[locale] || translations.en;
  document.documentElement.lang = locale.replace("_", "-");
  for (const element of document.querySelectorAll("[data-text]")) element.textContent = text[element.dataset.text];
  document.querySelector("#redirect-uri").textContent = REDIRECT_URI;
  renderList("#steps", text.steps);
  renderList("#connect-steps", text.connectSteps);
  renderList("#troubleshooting", text.troubleshooting, "li");
}

function renderList(selector, values, tag = "li") {
  const list = document.querySelector(selector);
  list.replaceChildren(...values.map((value) => {
    const item = document.createElement(tag);
    item.textContent = value;
    return item;
  }));
}

render(initialLocale);
