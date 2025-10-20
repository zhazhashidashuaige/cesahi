const gameHtmlString = `<!-- ▼▼▼ 【全新】这是游戏大厅的主界面，粘贴到所有 modal 的 div 之后、<script> 标签之前 ▼▼▼ -->
<div id="game-hall-screen" class="screen">
    <div class="header">
        <span class="back-btn" onclick="showScreen('home-screen')">‹</span>
        <span>游戏大厅</span>
        <span style="width: 30px;"></span> <!-- 占位符 -->
    </div>
    <div class="list-container" style="padding: 20px;">
        <p style="text-align: center; color: var(--text-secondary);">选择一个游戏开始吧！</p>
        <div id="game-hall-grid">
            <!-- 游戏列表将显示在这里 -->
            <div class="game-card" data-game="werewolf">
                <div class="game-icon">🐺</div>
                <div class="game-info">
                    <div class="game-title">狼人杀</div>
                    <div class="game-desc">逻辑与谎言的对决</div>
                </div>
            </div>
            <div class="game-card" data-game="sea-turtle-soup">
                <div class="game-icon">🐢</div>
                <div class="game-info">
                    <div class="game-title">海龟汤</div>
                    <div class="game-desc">揭开情景的真相</div>
                </div>
            </div>
             <div class="game-card" data-game="script-kill">
                <div class="game-icon">📜</div>
                <div class="game-info">
                    <div class="game-title">剧本杀</div>
                    <div class="game-desc">扮演角色，探寻谜案</div>
                </div>
            </div>
            <div class="game-card" data-game="guess-what">
                <div class="game-icon">🗣️</div>
                <div class="game-info">
                    <div class="game-title">你说我猜</div>
                    <div class="game-desc">考验默契的时候到了</div>
                </div>
            </div>
<div class="game-card" data-game="ludo">
    <div class="game-icon">🎲</div>
    <div class="game-info">
        <div class="game-title">心动飞行棋</div>
        <div class="game-desc">和Ta来一场只属于你们的冒险</div>
    </div>
</div>
<!-- ▲▲▲ 新增代码结束 ▲▲▲ -->
 <!-- ▼▼▼ 在这里粘贴新的游戏卡片 ▼▼▼ -->
<div class="game-card" data-game="undercover">
    <div class="game-icon">🕵️</div>
    <div class="game-info">
        <div class="game-title">谁是卧底</div>
        <div class="game-desc">语言的伪装，逻辑的陷阱</div>
    </div>
</div>
<!-- ▲▲▲ 新增代码结束 ▲▲▲ -->
             <p style="grid-column: 1 / -1; text-align: center; color: var(--text-secondary); font-size: 14px; margin-top: 20px;">更多游戏正在火速开发中...</p>
        </div>
    </div>
</div>
<!-- ▲▲▲ 新增HTML结束 ▲▲▲ -->
<!-- ▼▼▼ 【全新】这是整个狼人杀功能的HTML，粘贴到 game-hall-screen 的 div 之后 ▼▼▼ -->

<!-- 1. 狼人杀游戏设置屏幕 -->
<div id="werewolf-setup-screen" class="screen">
    <div class="header">
        <span class="back-btn" onclick="showScreen('game-hall-screen')">‹</span>
        <span>狼人杀 - 游戏设置</span>
    </div>
    <div class="form-container">
        <div class="form-group">
            <label for="werewolf-player-count">选择游戏人数</label>
            <select id="werewolf-player-count">
                <option value="6">6人局 (2狼, 2民, 预言家, 守卫)</option>
                <option value="9">9人局 (3狼, 3民, 预言家, 女巫, 猎人)</option>
                <option value="12">12人局 (4狼, 4民, 预言家, 女巫, 猎人, 白痴)</option>
            </select>
        </div>
        <div class="form-group">
            <label>邀请玩家 (你已自动加入)</label>
            <div id="werewolf-player-selection" class="list-container" style="height: 300px; border: 1px solid var(--border-color); border-radius: 8px;">
                <!-- 玩家选择列表将由JS动态生成 -->
            </div>
        </div>
        <button id="start-werewolf-game-btn" class="form-button">开始游戏</button>
    </div>
</div>

<!-- 2. 狼人杀游戏主界面 -->
<div id="werewolf-game-screen" class="screen">
    <div class="header">
        <span class="back-btn" id="exit-werewolf-game-btn">‹ 退出</span>
        <span id="werewolf-game-title">狼人杀</span>
        <span class="action-btn" id="werewolf-my-role-btn">我的身份</span>
    </div>
    <!-- 游戏主内容区 -->
    <div id="werewolf-game-content">
        <!-- 玩家座位区 -->
        <div id="werewolf-players-grid">
            <!-- 玩家头像和状态将由JS动态生成 -->
        </div>
        <!-- 游戏日志/信息区 -->
        <div id="werewolf-log-container">
            <div id="werewolf-game-log">
                <!-- 游戏过程信息会显示在这里 -->
            </div>
        </div>
        <!-- 玩家操作区 -->
        <div id="werewolf-action-area">
            <!-- 玩家的按钮会根据游戏阶段显示在这里 -->
        </div>
    </div>
</div>

<!-- ▲▲▲ 狼人杀功能HTML结束 ▲▲▲ -->
<!-- ▼▼▼ 【全新】狼人杀游戏结算卡片 ▼▼▼ -->
<div id="werewolf-summary-modal" class="modal">
    <div class="modal-content" style="height: auto; max-height: 80%;">
        <div class="modal-header">
            <span>游戏结算</span>
        </div>
        <div class="modal-body" id="werewolf-summary-content" style="white-space: pre-wrap; line-height: 1.7;">
            <!-- 结算内容将由JS动态生成在这里 -->
        </div>
        <div class="modal-footer">
            <button class="cancel" id="repost-summary-btn">发送复盘到聊天</button>
            <button class="save" id="back-to-hall-btn">返回大厅</button>
        </div>
    </div>
</div>
<!-- ▲▲▲ 新增HTML结束 ▲▲▲ -->
<!-- ▼▼▼ 【全新】狼人杀复盘发送目标选择器 ▼▼▼ -->
<div id="werewolf-target-picker-modal" class="modal">
    <div class="modal-content" style="height: 60%;">
        <div class="modal-header">
            <span>选择要发送的玩家</span>
        </div>
        <div class="modal-body" id="werewolf-target-list" style="padding: 0;">
            <!-- 玩家列表将由JS动态生成在这里 -->
        </div>
        <div class="modal-footer">
            <button id="wt-select-all-btn" class="form-button-secondary" style="width: 45%; margin: 0;">全选</button>
            <button id="wt-deselect-all-btn" class="form-button-secondary" style="width: 45%; margin: 0;">全不选</button>
        </div>
        <div class="modal-footer">
            <button class="cancel" id="wt-cancel-btn">取消</button>
            <button class="save" id="wt-confirm-btn">确认发送</button>
        </div>
    </div>
</div>
<!-- ▲▲▲ 新增HTML结束 ▲▲▲ -->
<!-- ▼▼▼ 【全新】这是整个海龟汤功能的HTML，请粘贴到 </body> 标签前 ▼▼▼ -->

<!-- 1. 海龟汤游戏主界面 -->
<div id="sea-turtle-soup-screen" class="screen">
    <div class="header">
        <span class="back-btn" id="exit-sts-game-btn">‹ 退出</span>
        <span>海龟汤</span>
        <span class="action-btn" id="reveal-sts-answer-btn">揭晓答案</span>
    </div>
    <div id="sts-game-content" style="display: flex; flex-direction: column; height: 100%; overflow: hidden; padding: 10px; box-sizing: border-box;">
        <!-- 玩家座位区 -->
        <div id="sts-players-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(60px, 1fr)); gap: 10px; padding: 10px; flex-shrink: 0;">
            <!-- 玩家头像和状态将由JS动态生成 -->
        </div>
        <!-- 游戏日志/信息区 -->
        <div id="sts-log-container" style="flex-grow: 1; background-color: rgba(0,0,0,0.05); border-radius: 10px; padding: 10px; overflow-y: auto; margin: 10px 0; min-height: 0;">
            <div id="sts-game-log">
                <!-- 游戏过程信息会显示在这里 -->
            </div>
        </div>
<!-- ▼▼▼ 用这块新代码替换旧的 id="sts-action-area" ▼▼▼ -->
<div id="sts-action-area" class="chat-input-area" style="visibility: visible;">
     <div class="chat-input-main-row">
        <textarea id="sts-question-input" rows="1" placeholder="输入问题或答案..."></textarea>
        <!-- 【核心修改】新增“猜答案”按钮 -->
        <button id="guess-sts-answer-btn" class="action-button" style="background-color: #ff9800;">猜答案</button>
        <button id="send-sts-question-btn" class="action-button">提问</button>
    </div>
</div>
<!-- ▲▲▲ 替换结束 ▲▲▲ -->
    </div>
</div>

<!-- 2. 海龟汤游戏设置模态框 -->
<div id="sea-turtle-soup-setup-modal" class="modal">
    <div class="modal-content" style="height: auto; max-height: 85%;">
        <div class="modal-header">
            <span>海龟汤 - 游戏设置</span>
        </div>
        <div class="modal-body">
            <div class="form-group">
                <label>邀请玩家 (你已自动加入)</label>
                <div id="sts-player-selection" class="list-container" style="height: 200px; border: 1px solid var(--border-color); border-radius: 8px;">
                    <!-- 玩家选择列表将由JS动态生成 -->
                </div>
            </div>
            <div class="form-group">
                <label>谁来出题？</label>
                <select id="sts-riddle-provider-select">
                    <option value="user">我来出题</option>
                    <option value="random_ai">随机一位AI</option>
                </select>
            </div>
            <!-- 用户出题的输入区 (默认隐藏) -->
            <div id="sts-user-riddle-input-area" style="display: none;">
                <div class="form-group">
                    <label for="sts-user-riddle-surface">谜面</label>
                    <textarea id="sts-user-riddle-surface" rows="2" placeholder="例如：一个男人走进酒吧，要了一杯水..."></textarea>
                </div>
                <div class="form-group">
                    <label for="sts-user-riddle-answer">谜底 (完整故事)</label>
                    <textarea id="sts-user-riddle-answer" rows="4" placeholder="例如：男人在打嗝，他想喝水止嗝..."></textarea>
                </div>
            </div>
            <!-- AI出题的输入区 (默认隐藏) -->
            <div id="sts-ai-riddle-input-area" style="display: none;">
                <div class="form-group">
                    <label for="sts-ai-riddle-type">谜题类型 (可选)</label>
                    <input type="text" id="sts-ai-riddle-type" placeholder="例如：恐怖、温情、脑洞、经典">
                </div>
            </div>
        </div>
        <div class="modal-footer">
            <button class="cancel" id="cancel-sts-setup-btn">取消</button>
            <button class="save" id="start-sts-game-btn">开始游戏</button>
        </div>
    </div>
</div>
<!-- ▼▼▼ 【全新】请将这两块代码粘贴到 </body> 标签前 ▼▼▼ -->

<!-- 1. 海龟汤游戏结算卡片 -->
<div id="sts-summary-modal" class="modal">
    <div class="modal-content" style="height: auto; max-height: 80%;">
        <div class="modal-header">
            <span>游戏结算</span>
        </div>
        <div class="modal-body" id="sts-summary-content" style="white-space: pre-wrap; line-height: 1.7;">
            <!-- 结算内容将由JS动态生成在这里 -->
        </div>
        <div class="modal-footer">
            <button class="cancel" id="share-sts-summary-btn">分享复盘</button>
            <button class="save" id="back-to-hall-from-sts-btn">返回大厅</button>
        </div>
    </div>
</div>

<!-- 2. 海龟汤复盘发送目标选择器 -->
<div id="sts-share-target-modal" class="modal">
    <div class="modal-content" style="height: 60%;">
        <div class="modal-header">
            <span>选择要分享的玩家</span>
        </div>
        <div class="modal-body" id="sts-share-target-list" style="padding: 0;">
            <!-- 玩家列表将由JS动态生成在这里 -->
        </div>
        <div class="modal-footer">
            <button id="sts-select-all-btn" class="form-button-secondary" style="width: 45%; margin: 0;">全选</button>
            <button id="sts-deselect-all-btn" class="form-button-secondary" style="width: 45%; margin: 0;">全不选</button>
        </div>
        <div class="modal-footer">
            <button class="cancel" id="sts-cancel-share-btn">取消</button>
            <button class="save" id="sts-confirm-share-btn">确认分享</button>
        </div>
    </div>
</div>

<!-- ▲▲▲ 新增HTML结束 ▲▲▲ -->
<!-- ▼▼▼ 【全新】这是整个剧本杀功能的HTML，请粘贴到 </body> 标签前 ▼▼▼ -->

<!-- 1. 剧本杀游戏设置屏幕 -->
<div id="script-kill-setup-screen" class="screen">
    <div class="header">
        <span class="back-btn" onclick="showScreen('game-hall-screen')">‹</span>
        <span>剧本杀 - 游戏设置</span>
    </div>
    <div class="form-container">
        <div class="form-group">
            <label>选择剧本</label>
            <div style="display: flex; gap: 10px;">
                <select id="script-kill-script-select" style="flex-grow: 1;"></select>
                <button id="manage-custom-scripts-btn" class="form-button-secondary" style="margin-top: 0; padding: 0 15px;">管理</button>
            </div>
        </div>
        <div class="form-group">
            <label>邀请玩家 (你已自动加入)</label>
            <div id="script-kill-player-selection" class="list-container" style="height: 300px; border: 1px solid var(--border-color); border-radius: 8px;">
                <!-- 玩家选择列表将由JS动态生成 -->
            </div>
        </div>
        <div class="form-group">
            <label class="toggle-switch-label">
                <span class="toggle-switch-text">自由选择角色 (关闭则随机分配)</span>
                <input type="checkbox" id="script-kill-free-choice-toggle">
                <span class="toggle-switch-slider"></span>
            </label>
        </div>
        <button id="start-script-kill-game-btn" class="form-button">开始游戏</button>
    </div>
</div>

<!-- 2. 剧本杀游戏主界面 -->
<div id="script-kill-game-screen" class="screen">
    <div class="header">
        <span class="back-btn" id="exit-script-kill-game-btn">‹ 退出</span>
        <span id="script-kill-game-title">剧本杀</span>
        <div class="header-actions">
            <span class="action-btn" id="script-kill-my-role-btn">我的角色</span>
            <span class="action-btn" id="script-kill-all-evidence-btn">公共线索</span>
        </div>
    </div>
    <div id="script-kill-game-content">
        <div id="script-kill-players-grid">
            <!-- 玩家头像和状态将由JS动态生成 -->
        </div>
        <div id="script-kill-log-container">
            <div id="script-kill-game-log">
                <!-- 游戏过程信息会显示在这里 -->
            </div>
        </div>
        <div id="script-kill-action-area">
            <!-- 玩家的按钮会根据游戏阶段显示在这里 -->
        </div>
    </div>
</div>
<!-- ▼▼▼ 把这一整块全新的HTML代码，粘贴到 </body> 标签的正上方 ▼▼▼ -->

<!-- 【全新】剧本杀自定义剧本管理模态框 -->
<div id="script-kill-manager-modal" class="modal">
    <div class="modal-content" style="height: 70%;">
<div class="modal-header">
    <span>管理自定义剧本</span>
    <div class="header-actions">
        <!-- ▼▼▼ 在这里添加一个新按钮 ▼▼▼ -->
        <button id="open-sk-ai-generator-btn" class="action-button" style="font-size: 14px;">AI生成</button>
        <!-- ▲▲▲ 添加结束 ▲▲▲ -->
        <button id="add-new-script-btn" class="action-button">添加</button>
    </div>
</div>

        <div class="modal-body" id="custom-scripts-list" style="padding: 0;">
            <!-- 自定义剧本列表将由JS动态生成在这里 -->
        </div>
        <div class="modal-footer">
            <button class="save" id="close-script-manager-btn" style="width: 100%;">完成</button>
        </div>
    </div>
</div>

<!-- ▲▲▲ 新增HTML结束 ▲▲▲ -->

<!-- ▼▼▼ 用下面这【一整块】全新的代码，替换掉你旧的 id="script-kill-editor-modal" ▼▼▼ -->

<!-- 1. 剧本编辑器主弹窗 (可视化版) -->
<div id="script-kill-editor-modal" class="modal">
    <div class="modal-content" style="height: 90%;">
        <div class="modal-header">
            <span id="script-editor-title">剧本编辑器</span>
        </div>
        <div class="modal-body" style="display: flex; flex-direction: column; gap: 15px;">
            
            <!-- 基础信息 -->
            <div class="form-group">
                <label for="script-name-input">剧本名称</label>
                <input type="text" id="script-name-input">
            </div>
            <div class="form-group">
                <label for="script-background-input">故事背景</label>
                <textarea id="script-background-input" rows="3"></textarea>
            </div>
            
            <hr style="opacity: 0.2;">

            <!-- 角色设定区 -->
            <div>
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                    <label style="margin: 0; font-weight: 600;">角色设定</label>
                    <button id="sk-add-role-btn" class="form-button-secondary" style="margin: 0; padding: 5px 15px;">+ 添加角色</button>
                </div>
                <div id="sk-roles-container" class="sk-item-container">
                    <!-- 角色卡片将由JS动态生成在这里 -->
                </div>
            </div>

            <!-- 线索卡区 -->
            <div>
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                    <label style="margin: 0; font-weight: 600;">线索卡</label>
                    <button id="sk-add-clue-btn" class="form-button-secondary" style="margin: 0; padding: 5px 15px;">+ 添加线索</button>
                </div>
                <div id="sk-clues-container" class="sk-item-container">
                    <!-- 线索卡片将由JS动态生成在这里 -->
                </div>
            </div>

            <!-- 最终真相互动 -->
            <div class="form-group">
                <label for="sk-truth-input">最终真相</label>
                <textarea id="sk-truth-input" rows="3"></textarea>
            </div>
        </div>
        <div class="modal-footer">
            <button class="cancel" id="cancel-script-editor-btn">取消</button>
            <button class="save" id="save-script-btn">保存剧本</button>
        </div>
    </div>
</div>

<!-- 2. 【全新】用于编辑单个角色/线索的子弹窗 -->
<div id="sk-item-editor-modal" class="modal" style="z-index: 1003;">
    <div class="modal-content" style="height: auto; max-height: 85%;">
        <div class="modal-header">
            <span id="sk-item-editor-title"></span>
        </div>
        <div class="modal-body">
            <!-- 角色编辑字段 (默认隐藏) -->
            <div id="sk-role-editor-fields" style="display: none;">
                <div class="form-group">
                    <label for="sk-role-name-input">角色名称</label>
                    <input type="text" id="sk-role-name-input">
                </div>
                <div class="form-group">
                    <label for="sk-role-desc-input">角色介绍</label>
                    <textarea id="sk-role-desc-input" rows="3"></textarea>
                </div>
<div class="form-group">
    <label for="sk-role-storyline-input">故事线 (案发时间段的详细行动轨迹)</label>
    <textarea id="sk-role-storyline-input" rows="5"></textarea>
</div>
                <div class="form-group">
                    <label for="sk-role-tasks-input">秘密任务</label>
                    <textarea id="sk-role-tasks-input" rows="2"></textarea>
                </div>
                <div class="form-group">
                    <label class="toggle-switch-label">
                        <span class="toggle-switch-text">是凶手</span>
                        <input type="checkbox" id="sk-role-killer-toggle">
                        <span class="toggle-switch-slider"></span>
                    </label>
                </div>
            </div>
            <!-- 线索编辑字段 (默认隐藏) -->
            <div id="sk-clue-editor-fields" style="display: none;">
                <div class="form-group">
                    <label for="sk-clue-owner-select">线索归属</label>
                    <select id="sk-clue-owner-select">
                        <!-- 选项将由JS动态生成 -->
                    </select>
                </div>
                <div class="form-group">
                    <label for="sk-clue-desc-input">线索描述</label>
                    <textarea id="sk-clue-desc-input" rows="4"></textarea>
                </div>
                 <div class="form-group">
                    <label class="toggle-switch-label">
                        <span class="toggle-switch-text">是关键线索</span>
                        <input type="checkbox" id="sk-clue-key-toggle">
                        <span class="toggle-switch-slider"></span>
                    </label>
                </div>
            </div>
        </div>
        <div class="modal-footer">
            <button class="cancel" id="sk-item-editor-cancel-btn">取消</button>
            <button class="save" id="sk-item-editor-save-btn">保存</button>
        </div>
    </div>
</div>
<!-- ▲▲▲ 替换结束 ▲▲▲ -->

<!-- 4. 角色身份卡模态框 -->
<div id="script-kill-role-modal" class="modal">
    <div class="modal-content" style="height: 70%;">
        <div class="modal-header">
            <span id="sk-role-name">你的角色</span>
        </div>
        <div class="modal-body" id="sk-role-details" style="white-space: pre-wrap; line-height: 1.7;">
            <!-- 角色介绍、任务等将显示在这里 -->
        </div>
        <div class="modal-footer">
            <button class="save" id="close-sk-role-modal-btn" style="width:100%;">我已了解</button>
        </div>
    </div>
</div>

<!-- 5. 个人线索板模态框 -->
<div id="script-kill-evidence-modal" class="modal">
    <div class="modal-content" style="height: 70%;">
        <div class="modal-header">
            <span>我的线索板</span>
        </div>
        <div class="modal-body" id="sk-evidence-list" style="padding: 10px; display: flex; flex-direction: column; gap: 10px;">
            <!-- 搜到的线索卡片会显示在这里 -->
        </div>
        <div class="modal-footer">
            <button class="save" id="close-sk-evidence-modal-btn" style="width:100%;">关闭</button>
        </div>
    </div>
</div>

<!-- 6. 投票模态框 -->
<div id="script-kill-vote-modal" class="modal">
    <div class="modal-content" style="height: auto; max-height: 70%;">
        <div class="modal-header">
            <span id="sk-vote-title">最终投票</span>
        </div>
        <div class="modal-body" id="sk-vote-options-list" style="text-align: left; padding: 20px;">
            <!-- 投票选项将由JS动态生成 -->
        </div>
        <div class="modal-footer">
            <button class="cancel" id="cancel-sk-vote-btn">取消</button>
            <button class="save" id="confirm-sk-vote-btn">确认投票</button>
        </div>
    </div>
</div>
<!-- ▼▼▼ 【全新】剧本杀游戏结算卡片 ▼▼▼ -->
<div id="script-kill-summary-modal" class="modal">
    <div class="modal-content" style="height: auto; max-height: 80%;">
        <div class="modal-header">
            <span>游戏结算</span>
        </div>
        <div class="modal-body" id="script-kill-summary-content" style="white-space: pre-wrap; line-height: 1.7;">
            <!-- 结算内容将由JS动态生成在这里 -->
        </div>
        <div class="modal-footer">
            <button class="cancel" id="repost-sk-summary-btn">转发复盘到单聊</button>
            <button class="save" id="back-to-hall-from-sk-btn">返回大厅</button>
        </div>
    </div>
</div>

<!-- ▼▼▼ 【全新】剧本杀复盘发送目标选择器 ▼▼▼ -->
<div id="script-kill-target-picker-modal" class="modal">
    <div class="modal-content" style="height: 60%;">
        <div class="modal-header">
            <span>选择要转发的玩家</span>
        </div>
        <div class="modal-body" id="script-kill-target-list" style="padding: 0;">
            <!-- 玩家列表将由JS动态生成在这里 -->
        </div>
        <div class="modal-footer">
            <button id="sk-select-all-btn" class="form-button-secondary" style="width: 45%; margin: 0;">全选</button>
            <button id="sk-deselect-all-btn" class="form-button-secondary" style="width: 45%; margin: 0;">全不选</button>
        </div>
        <div class="modal-footer">
            <button class="cancel" id="sk-cancel-share-btn">取消</button>
            <button class="save" id="sk-confirm-share-btn">确认转发</button>
        </div>
    </div>
</div>
<!-- ▲▲▲ 新增HTML结束 ▲▲▲ -->
<!-- ▼▼▼ 【全新】这是AI剧本生成器的弹窗，粘贴到</body>前 ▼▼▼ -->
<div id="sk-ai-generator-modal" class="modal">
    <div class="modal-content" style="height: 90%;">
        <div class="modal-header">
            <span>AI 剧本生成器</span>
        </div>
<div class="modal-body" style="display: flex; flex-direction: column; gap: 15px;">
            
    <div class="form-group">
        <label for="sk-ai-elements-input">核心要素 (用逗号分隔)</label>
        <input type="text" id="sk-ai-elements-input" placeholder="例如：现代, 谋杀, 暴风雪山庄, 遗产">
    </div>

    <!-- ▼▼▼ 【这是你要求新增的HTML】请把它粘贴到这里 ▼▼▼ -->
    <div class="form-group">
        <label for="sk-ai-player-count-input">玩家人数 (包含凶手, 建议4-8人)</label>
        <input type="number" id="sk-ai-player-count-input" value="5" min="3" max="12" style="width: 100%; box-sizing: border-box; padding: 10px; border-radius: 6px; border: 1px solid var(--border-color);">
    </div>
    <!-- ▲▲▲ 新增HTML结束 ▲▲▲ -->

    <div class="form-group">
        <label for="sk-ai-summary-input">剧情梗概 (可选)</label>
        <textarea id="sk-ai-summary-input" rows="4" placeholder="可以写一个简单的故事大纲，帮助AI更好地理解你的想法..."></textarea>
    </div>
    <button id="sk-trigger-ai-generation-btn" class="form-button">开始生成</button>
          
            <hr style="opacity: 0.2; margin: 5px 0;">

            <div class="form-group" style="flex-grow: 1; min-height: 0; display: flex; flex-direction: column;">
                <label>AI 生成结果预览</label>
                <div id="sk-ai-result-preview" style="flex-grow: 1; overflow-y: auto; background: #f0f2f5; padding: 10px; border-radius: 8px; white-space: pre-wrap; line-height: 1.6; color: #555;">
                    点击“开始生成”后，结果将显示在这里...
                </div>
            </div>

        </div>
        <div class="modal-footer">
            <button class="cancel" id="sk-ai-generator-cancel-btn">关闭</button>
            <!-- 这个保存按钮初始是禁用的，生成成功后才会激活 -->
            <button class="save" id="sk-ai-generator-save-btn" disabled>保存剧本</button>
        </div>
    </div>
</div>
<!-- ▲▲▲ 新增HTML结束 ▲▲▲ -->

<!-- ▲▲▲ 剧本杀功能HTML结束 ▲▲▲ -->

<!-- ▲▲▲ 海龟汤功能HTML结束 ▲▲▲ -->
 <!-- ▼▼▼ 【全新】这是“你说我猜”游戏的所有HTML代码 ▼▼▼ -->

<!-- 1. “你说我猜”游戏设置屏幕 -->
<div id="guess-what-setup-screen" class="screen">
    <div class="header">
        <span class="back-btn" onclick="showScreen('game-hall-screen')">‹</span>
        <span>你说我猜 - 游戏设置</span>
    </div>
    <div class="form-container">
        <div class="form-group">
            <label>邀请一位玩伴</label>
            <div id="guess-what-player-selection" class="list-container" style="height: 200px; border: 1px solid var(--border-color); border-radius: 8px;">
                <!-- 玩家选择列表将由JS动态生成 -->
            </div>
        </div>
        <div class="form-group">
            <label>选择游戏模式</label>
            <div style="display: flex; gap: 20px;">
                <label><input type="radio" name="guess_what_mode" value="ai_guesses" checked> 我出题，AI猜</label>
                <label><input type="radio" name="guess_what_mode" value="user_guesses"> AI出题，我猜</label>
            </div>
        </div>
        <!-- "我出题"模式下的输入框 -->
        <div class="form-group" id="user-word-input-container">
            <label for="guess-what-user-word">请输入你要出的词</label>
            <input type="text" id="guess-what-user-word" placeholder="例如：苹果、流浪地球...">
        </div>
        <button id="start-guess-what-game-btn" class="form-button">开始游戏</button>
    </div>
</div>

<!-- 2. “你说我猜”游戏主界面 -->
<div id="guess-what-game-screen" class="screen">
    <div class="header">
        <span class="back-btn" id="exit-guess-what-game-btn">‹ 退出</span>
        <span id="guess-what-game-title">你说我猜</span>
        <span class="action-btn" id="give-up-guess-what-btn">放弃</span>
    </div>
    <!-- 游戏主内容区 -->
    <div id="guess-what-game-content" style="display: flex; flex-direction: column; height: 100%; overflow: hidden; padding: 10px; box-sizing: border-box;">
        <!-- 游戏日志/信息区 -->
        <div id="guess-what-log-container" style="flex-grow: 1; background-color: rgba(0,0,0,0.05); border-radius: 10px; padding: 10px; overflow-y: auto; margin: 10px 0; min-height: 0;">
            <div id="guess-what-game-log">
                <!-- 游戏过程信息会显示在这里 -->
            </div>
        </div>
        <!-- 玩家操作区 -->
        <div id="guess-what-action-area" class="chat-input-area" style="visibility: visible;">
             <div class="chat-input-main-row">
                <textarea id="guess-what-user-input" rows="1" placeholder="输入提示或猜测..."></textarea>
                <button id="send-guess-what-input-btn" class="action-button">发送</button>
            </div>
        </div>
    </div>
</div>

<!-- ▲▲▲ “你说我猜”HTML代码结束 ▲▲▲ -->
<!-- ▼▼▼ 【全新】“你说我猜”游戏结算卡片 ▼▼▼ -->
<div id="guess-what-summary-modal" class="modal">
    <div class="modal-content" style="height: auto; max-height: 80%;">
        <div class="modal-header">
            <span>游戏结算</span>
        </div>
        <div class="modal-body" id="guess-what-summary-content" style="white-space: pre-wrap; line-height: 1.7;">
            <!-- 结算内容将由JS动态生成在这里 -->
        </div>
        <div class="modal-footer">
            <button class="cancel" id="forward-guess-what-summary-btn">转发给Ta</button>
            <button class="save" id="close-guess-what-summary-btn">返回大厅</button>
        </div>
    </div>
</div>
<!-- ▲▲▲ 新增HTML结束 ▲▲▲ -->
 <!-- ▼▼▼ 【全新】这是“心动飞行棋”的所有新HTML代码 ▼▼▼ -->

<!-- 1. 飞行棋游戏设置屏幕 -->
<div id="ludo-setup-screen" class="screen">
    <div class="header">
        <span class="back-btn" onclick="showScreen('game-hall-screen')">‹</span>
        <span>心动飞行棋 - 游戏设置</span>
    </div>
    <div class="form-container">
        <div class="form-group">
            <label>选择一位玩伴</label>
            <!-- 邀请列表，我们会用JS来填充 -->
            <div id="ludo-player-selection" class="list-container" style="height: 200px; border: 1px solid var(--border-color); border-radius: 8px;">
            </div>
        </div>
        <!-- ▼▼▼ 在 #ludo-setup-screen 的 "form-container" 内，粘贴这段新代码 ▼▼▼ -->
<div class="form-group">
    <label>选择问题库</label>
    <div style="display: flex; align-items: center; gap: 10px;">
        <select id="ludo-question-bank-select" style="flex-grow: 1;"></select>
        <button id="manage-ludo-question-banks-btn" class="form-button-secondary" style="margin-top: 0; padding: 12px; width: auto;">管理题库</button>
    </div>
</div>
<!-- ▲▲▲ 粘贴结束 ▲▲▲ -->

        <button id="start-ludo-game-btn" class="form-button">开始游戏</button>
    </div>
</div>

<!-- 2. 飞行棋游戏主界面 -->
<div id="ludo-game-screen" class="screen">
    <div class="header">
        <span class="back-btn" id="exit-ludo-game-btn">‹ 退出</span>
        <span>心动飞行棋</span>
        <!-- 这里可以放一个重置游戏的按钮 -->
        <span class="action-btn" id="restart-ludo-game-btn" title="重新开始">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"></polyline><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path></svg>
        </span>
    </div>
    <!-- 游戏主内容区 -->
    <div id="ludo-game-content">
        <!-- 棋盘区域 -->
        <div id="ludo-board-container">
            <div id="ludo-board">
                <!-- 棋盘格子将由JS动态生成 -->
            </div>
            <!-- 玩家棋子 -->
            <div id="ludo-user-piece" class="ludo-piece user"></div>
            <div id="ludo-char-piece" class="ludo-piece char"></div>
        </div>

        <!-- 游戏日志区域 -->
        <div id="ludo-log-container">
            <div id="ludo-game-log">
                <!-- 游戏过程信息会显示在这里 -->
            </div>
        </div>
        
        <!-- 玩家操作区 -->
        <div id="ludo-action-area">
            <!-- 用户的按钮会根据游戏阶段显示在这里 -->
        </div>
    </div>
</div>

<!-- ▲▲▲ “心动飞行棋”HTML代码结束 ▲▲▲ -->
<!-- ▼▼▼ 在 </body> 标签的正上方，粘贴下面这一整块新代码 ▼▼▼ -->

<!-- 【全新】飞行棋问题库管理模态框 (已修改) -->
<div id="ludo-qbank-manager-modal" class="modal">
    <div class="modal-content" style="height: 70%;">
        <div class="modal-header">
            <span>管理问题库</span>
            <!-- ▼▼▼ 核心修改在这里 ▼▼▼ -->
            <div class="header-actions">
                <span class="action-btn" id="import-ludo-qbank-btn" title="导入题库">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                        <polyline points="17 8 12 3 7 8"></polyline>
                        <line x1="12" y1="3" x2="12" y2="15"></line>
                    </svg>
                </span>
                <span class="action-btn" id="add-ludo-qbank-btn" style="font-size: 16px;">新建</span>
            </div>
            <!-- ▲▲▲ 修改结束 ▲▲▲ -->
        </div>
        <div class="modal-body" id="ludo-qbank-list" style="padding: 0;">
            <!-- 问题库列表将由JS动态生成在这里 -->
        </div>
        <div class="modal-footer">
            <button class="save" id="close-qbank-manager-btn" style="width: 100%;">完成</button>
        </div>
    </div>
</div>


<!-- 【全新】飞行棋问题编辑器模态框 -->
<div id="ludo-question-editor-modal" class="modal">
    <div class="modal-content" style="height: 80%;">
        <div class="modal-header">
            <span class="back-btn" id="back-to-qbank-manager-btn">‹</span>
            <span id="ludo-question-editor-title">编辑问题</span>
            <span class="action-btn" id="add-ludo-question-btn" style="font-size: 28px; font-weight: 300;">+</span>
        </div>
        <div class="modal-body" id="ludo-question-list" style="padding: 10px;">
            <!-- 问题列表将由JS动态生成在这里 -->
        </div>
    </div>
</div>

<!-- ▲▲▲ 新增HTML结束 ▲▲▲ -->
<!-- ▼▼▼ 在 </body> 标签的正上方，粘贴下面这一整块新代码 ▼▼▼ -->
<!-- 【全新】飞行棋单个问题编辑器模态框 -->
<div id="ludo-single-question-editor-modal" class="modal">
    <div class="modal-content" style="height: auto;">
        <div class="modal-header">
            <span id="ludo-single-question-title">编辑问题</span>
        </div>
        <div class="modal-body">
            <div class="form-group">
                <label for="ludo-question-text-input">问题内容</label>
                <textarea id="ludo-question-text-input" rows="4"></textarea>
            </div>
            <div class="form-group">
                <label>问题类型</label>
                <div style="display: flex; gap: 20px;">
                    <label><input type="radio" name="ludo_question_type" value="both_answer" checked> 共同回答</label>
                    <label><input type="radio" name="ludo_question_type" value="single_answer"> 一人回答,一人评价</label>
                </div>
            </div>
        </div>
        <div class="modal-footer">
            <button class="cancel" id="cancel-single-question-btn">取消</button>
            <button class="save" id="save-single-question-btn">保存</button>
        </div>
    </div>
</div>
<!-- ▲▲▲ 新增HTML结束 ▲▲▲ -->
<!-- ▼▼▼ 【全新】这是飞行棋游戏结算卡片，请粘贴到 </body> 标签前 ▼▼▼ -->
<div id="ludo-summary-modal" class="modal">
    <div class="modal-content" style="height: auto; max-height: 80%;">
        <div class="modal-header">
            <span>游戏结算</span>
        </div>
        <div class="modal-body" id="ludo-summary-content" style="text-align: left; line-height: 1.7;">
            <!-- 结算内容将由JS动态生成在这里 -->
        </div>
        <div class="modal-footer">
            <button class="cancel" id="share-ludo-summary-btn">分享给Ta</button>
            <button class="save" id="back-to-hall-from-ludo-btn">返回大厅</button>
        </div>
    </div>
</div>
<!-- ▼▼▼ 【全新】“谁是卧底”游戏结算卡片 ▼▼▼ -->
<div id="undercover-summary-modal" class="modal">
    <div class="modal-content" style="height: auto; max-height: 80%;">
        <div class="modal-header">
            <span>游戏结算</span>
        </div>
        <div class="modal-body" id="undercover-summary-content" style="white-space: pre-wrap; line-height: 1.7;">
            <!-- 结算内容将由JS动态生成在这里 -->
        </div>
        <div class="modal-footer">
            <!-- 这是我们新增的“分享复盘”按钮 -->
            <button class="cancel" id="repost-undercover-summary-btn">分享复盘到单聊</button>
            <button class="save" id="back-to-hall-from-undercover-btn">返回大厅</button>
        </div>
    </div>
</div>
<!-- ▼▼▼ 在 </body> 标签前，粘贴下面这整块【全新的】HTML代码 ▼▼▼ -->
<!-- “谁是卧底”复盘发送目标选择器 -->
<div id="undercover-target-picker-modal" class="modal">
    <div class="modal-content" style="height: 60%;">
        <div class="modal-header">
            <span>选择要发送的玩家</span>
        </div>
        <div class="modal-body" id="undercover-target-list" style="padding: 0;">
            <!-- 玩家列表将由JS动态生成在这里 -->
        </div>
        <div class="modal-footer">
            <button id="uc-select-all-btn" class="form-button-secondary" style="width: 45%; margin: 0;">全选</button>
            <button id="uc-deselect-all-btn" class="form-button-secondary" style="width: 45%; margin: 0;">全不选</button>
        </div>
        <div class="modal-footer">
            <button class="cancel" id="uc-cancel-share-btn">取消</button>
            <button class="save" id="uc-confirm-share-btn">确认发送</button>
        </div>
    </div>
</div>
<!-- ▲▲▲ 新增HTML结束 ▲▲▲ -->`;
document.body.insertAdjacentHTML('beforeend', gameHtmlString);
// ▼▼▼ 把这一整块全新的代码，粘贴到 const GEMINI_API_URL 的正上方 ▼▼▼

const BUILT_IN_SCRIPTS = [
  {
    id: 'built_in_1',
    name: '办公室疑云',
    storyBackground:
      '深夜，顶级互联网公司“比特无限”灯火通明。以苛刻闻名的项目总监王强，被发现死在自己的座位上，死因为药物中毒。警方初步锁定了当晚还在公司的五位嫌疑人，每个人似乎都与死者有着千丝万缕的联系。在这座欲望与代码交织的钢铁森林里，谁的秘密被永远埋葬，谁的双手沾染了罪恶？',
    roles: [
      {
        name: '李思',
        description: '公司新晋的天才程序员，技术过硬，但性格内向，不善言辞。',
        storyline: `今天是项目上线的最后期限，我被王总监逼着加班到深夜。\n**晚上8:00**：王总监把我叫进他办公室，因为一个微不足道的bug对我破口大骂，甚至撕掉了我的绩效评估报告，说我“不合格”。我气得浑身发抖，和他大吵了一架，然后摔门而出。\n**晚上8:30**：我回到工位，越想越气，打开电脑写了一封辞职信，但还没发送。\n**晚上9:00**：我起身去茶水间倒水，路过总监办公室时，看到人事主管陈静端着一杯咖啡走了进去。我当时没太在意。\n**晚上9:30**：我有点饿，点了一份外卖。等外卖的时候，我看到设计师孙伟鬼鬼祟祟地从茶水间的方向走出来，手里好像攥着什么东西。\n**晚上10:00**：外卖到了，我吃完外卖继续改bug，直到被发现尸体的惊叫声打断。`,
        tasks:
          '1. 隐藏你与王强总监发生过激烈争吵，并被他评为“不合格”的事实。\n2. 你的首要目标是自保，找到证据证明你离开后另有其人进入过办公室。\n3. 你怀疑陈静和孙伟，尝试找出他们的可疑之处。',
        isKiller: false,
      },
      {
        name: '赵娜',
        description: '公司的市场部经理，能力出众，是典型的职场女强人，野心勃勃。',
        storyline: `今晚本不需要我加班，但我为了准备一个重要的竞标方案，主动留了下来。\n**晚上7:30**：我在自己的办公室整理资料，无意中发现了王强挪用项目公款的证据。我立刻起草了一封匿名举报邮件，准备发给总部。\n**晚上8:10**：我听到隔壁总监办公室传来激烈的争吵声，好像是李思在和王强吵架。\n**晚上8:45**：我需要一些数据，就去找王强签字。进他办公室时，他正在喝咖啡，脸色很差。我把文件给他，他很不耐烦地签了字。我注意到他桌上放着一瓶没贴标签的药瓶。\n**晚上9:15**：我回到自己办公室，思考着举报邮件的事情。我担心这会影响公司声誉，最终还是没有发送。\n**晚上10:15**：我准备下班，路过总监办公室时，发现门虚掩着，里面很安静。我没有进去看，直接离开了公司。`,
        tasks:
          '1. 你的首要任务是找出真凶，洗清自己的嫌疑，确保公司丑闻不被曝光，以免影响你的职业前途。\n2. 隐藏你发现王强挪用公款并准备举报他的事实。\n3. 你看到他桌上的药瓶，这是一个重要线索，你需要引导大家注意到这一点。',
        isKiller: false,
      },
      {
        name: '孙伟',
        description: '公司的资深UI设计师，也是王强的老部下，表面对他毕恭毕敬。',
        storyline: `我恨透了王强！他克扣了我们团队辛辛苦苦做完的项目奖金，自己却拿了大头。\n**晚上9:00**：我借口加班，实际上是想潜入王强的办公室，找到他克扣奖金的证据。我看到陈静端着咖啡进去后不久就出来了。\n**晚上9:20**：我确认王强办公室没人注意，就偷偷溜了进去。我看到他趴在桌上睡着了，旁边是那杯几乎没喝的咖啡。我在他抽屉里翻找，果然找到了一份内部奖金分配表，证实了他中饱私囊。我用手机拍了下来。\n**晚上9:30**：我拿着证据悄悄离开办公室，准备去茶水间处理一下。这时迎面撞上了去倒水的李思，我吓了一跳，赶紧把手机藏进口袋里。\n**晚上10:00后**：我一直在自己的工位上，盘算着怎么利用这个证据让他身败名裂。`,
        tasks:
          '1. 隐藏你曾潜入总监办公室并偷拍证据的事实。\n2. 王强死了对你有利，你需要引导大家怀疑其他有动机的人，比如与他争吵的李思。\n3. 保护好你手机里的照片证据，这是你的护身符。',
        isKiller: false,
      },
      {
        name: '陈静',
        description: '公司的人事主管，外表温柔体贴，善于处理人际关系。',
        storyline: `我曾是王强秘密的情人，他承诺过会和妻子离婚娶我。但最近，我发现他为了攀附一个富家女，准备抛弃我。更让我恐惧的是，他手机里存着我们大量的私密照片和视频，如果曝光，我的职业生涯就全毁了。\n**晚上8:45**：我知道王强有喝咖啡的习惯。我提前准备了强效安眠药，磨成粉末，藏在身上。\n**晚上9:00**：我以关心他为由，为他冲了一杯咖啡，并将安眠药全部倒了进去，然后端进了他的办公室。他当时正在处理文件，没有怀疑，喝了一大口。\n**晚上9:10**：我借口离开，在外面观察。不一会儿，就看到他趴在桌上睡着了。\n**晚上9:20**：我返回办公室，想找到他的手机删除资料。但我怎么也找不到他的手机。此时我发现他已经没了呼吸，我吓坏了，慌乱中，我不小心将他桌上的一条项链（他准备送给那个富家女的）碰掉，掉进了我的手提包里。\n**晚上9:40**：我惊慌失措地逃离了办公室，回到自己的工位假装加班，心乱如麻。`,
        tasks: `【你的核心任务】\n请隐藏你为了销毁证据而失手用安眠药毒杀王强的事实。你是本案的唯一真凶。\n\n【你的行动指南】\n1. 嫁祸他人。你可以利用你看到的、听到的信息，将嫌疑引向李思或孙伟。\n2. 你包里的项链是定时炸弹，想办法合理解释它的来历，或者神不知鬼不觉地处理掉它。\n3. 你的目标是误导所有人，让他们投出错误的凶手。`,
        isKiller: true,
      },
      {
        name: '周毅',
        description: '公司大楼的夜班保安，看起来忠厚老实，但观察力敏锐。',
        storyline: `作为保安，我负责大楼夜间的安全巡逻。\n**晚上8:10**：我巡逻到18楼，听到总监办公室里有激烈的争吵声，好像是那个叫李思的程序员，我没敢靠近。\n**晚上9:00**：我看到人事主管陈静端着杯咖啡进了总监办公室，几分钟后就出来了，看起来有点紧张。\n**晚上9:20**：我看到UI设计师孙伟，像做贼一样溜进了总监办公室。\n**晚上9:40**：我又看到陈静从总监办公室出来，这次她脸色惨白，脚步匆忙，好像丢了魂一样。我觉得很奇怪，但没敢多问。\n**晚上10:30**：我进行例行检查，发现总监办公室的门没关，进去一看，发现王总监已经……我立刻报了警。`,
        tasks:
          '1. 你是本案最重要的目击证人，你的任务是诚实、准确地向大家提供你看到的时间线索。\n2. 你觉得陈静的行为最可疑，你需要重点观察她，并向大家说明你的怀疑。\n3. 找出对公司最有利的真相，避免事件扩大化。',
        isKiller: false,
      },
    ],
    clues: [
      {
        owner: '李思',
        description: '一张被揉成一团、丢在垃圾桶里的绩效评估报告，上面有王强龙飞凤舞的签名和“不合格，建议辞退”的批注。',
      },
      {
        owner: '赵娜',
        description:
          '你的电脑里有一封未发送的邮件，收件人是集团总部纪检委，标题是“关于比特无限项目总监王强涉嫌严重职务侵占的实名举报”。',
      },
      {
        owner: '孙伟',
        description:
          '你的手机相册里有一张照片，内容是一份内部奖金分配表，表格显示项目总奖金的70%都流向了王强的个人账户。',
      },
      {
        owner: '陈静',
        description: '在你的手提包夹层里，发现了一条价值不菲的钻石项链，包装盒还在，但没有贺卡。',
        isKey: true,
      },
      { owner: '周毅', description: '一份保安巡逻日志，清晰地记录了你在不同时间点看到不同人进出总监办公室的情况。' },
      { owner: '公共', description: '在茶水间垃圾桶里发现一个空的安眠药药瓶，上面的标签被撕掉了。' },
      { owner: '公共', description: '在死者办公桌下发现一部手机，但不是死者常用的那部，手机已经没电了。' },
    ],
    truth:
      '凶手是人事主管陈静。她与总监王强有私情，但王强近期为了利益想和她分手并娶一位富家女。当晚，陈静在王强的咖啡里下了过量安眠药，想让他睡着后偷走他手机里存有的两人亲密照片。但由于药量过大，王强意外死亡。陈静在慌乱中没找到手机，反而不小心将王强准备送给富家女的项链碰进了自己的包里。',
  },
  // --- 【全新剧本1：深海遗书】 ---
  {
    id: 'built_in_2',
    name: '深海遗书',
    storyBackground:
      '在与世隔绝的“回响岛”上，著名的海洋学家李博士被发现死在自己反锁的书房中，桌上放着一封打印的遗书，死因为氰化物中毒。一场突如其来的风暴切断了岛上与外界的所有联系，将剩下的四个人困在了这座孤岛上：李博士的得意门生、一位竞争对手、一位沉默寡言的技术员，以及一位不请自来的记者。',
    roles: [
      {
        name: '高远',
        description: '李博士的学生，才华横溢但野心勃勃。',
        storyline: `我一直觉得老师窃取了我的研究成果。今晚，我本想和他摊牌。\n**晚上7:00**：我和老师在实验室大吵一架，他承认参考了我的数据，但拒绝公开承认。我愤怒地离开。\n**晚上8:00**：我回到宿舍，越想越气。我利用权限，远程删除了部分对他有利、对我不利的核心实验数据，想让他无法发布论文。\n**晚上9:00**：我去食堂吃饭，看到技术员陈默在调试监控设备，他看起来心事重重。\n**晚上9:45**：我看到记者张莱在李博士书房门口徘徊，似乎想进去但又不敢。`,
        tasks:
          '1. 隐藏你和老师的学术纠纷以及你删除数据的行为。\n2. 你认为自己的前途受到了威胁，必须找到真凶来洗清嫌疑。\n3. 引导大家怀疑其他有动机的人。',
        isKiller: false,
      },
      {
        name: '林雪',
        description: '另一位海洋学家，与李博士是长期的竞争对手。',
        storyline: `我和李博士在竞争一个重要的国际科研基金。我知道他这次的研究有重大突破。\n**晚上7:30**：我去找李博士，希望他能分享一些数据，被他无情拒绝了。我们不欢而散。\n**晚上8:30**：我在自己的房间里整理资料，听到外面有奇怪的电流声，好像是停电了一瞬间又恢复了。\n**晚上9:10**：我口渴去厨房倒水，看到高远神色慌张地从机房的方向出来。\n**晚上10:00**：我经过书房时，闻到一股淡淡的杏仁味（氰化物的典型气味），但我当时以为是实验室的化学品味道，没有在意。`,
        tasks:
          '1. 李博士的死对你的基金申请有利，这是你的嫌疑点，你需要撇清关系。\n2. 隐藏你曾私下找他索要数据被拒的事实。\n3. 你闻到的杏仁味是关键线索，需要让大家知道。',
        isKiller: false,
      },
      {
        name: '陈默',
        description: '研究站的技术员，性格内向，暗恋着李博士。',
        storyline: `我深爱着李博士，但她似乎对我毫不在意。我掌管着整个研究站的设备和监控。\n**晚上8:30**：我接到高远的请求，他让我“不小心”让监控系统断电一分钟。我虽然觉得奇怪，但因为他答应帮我向李博士说好话，我还是照做了。\n**晚上9:00**：我看到李博士把自己锁在书房里，神情悲伤。我很难过，但不敢打扰。\n**晚上9:20**：我看到记者张莱试图撬书房的门锁，被我发现后他慌忙走开了。\n**晚上10:30**：我越想越不对劲，用备用钥匙打开了书房的门，发现了博士的尸体。`,
        tasks:
          '1. 隐藏你曾受高远指使，人为制造监控断电的事实。\n2. 你有备用钥匙，这让你有重大嫌疑，你需要找到合理的解释。\n3. 你怀疑记者张莱有不轨行为。',
        isKiller: false,
      },
      {
        name: '张莱',
        description: '一位追踪学术丑闻的记者，秘密登岛。',
        storyline: `我收到线报，称李博士的研究涉嫌造假，我是来调查真相的。今晚是最好的机会。\n**晚上9:00**：我绕到李博士书房的窗外，看到她正在电脑前打字，似乎在写着什么重要的东西。我用长焦相机拍下了几张模糊的照片。\n**晚上9:20**：我尝试从正门进入书房，想找她当面对质，但门被反锁了。我试图用铁丝开锁，结果被技术员陈默撞见了，我只好假装路过离开。\n**晚上9:50**：我回到自己的住处，放大相机里的照片，发现她打字的内容似乎是一封遗书，但内容很奇怪，好像在暗示什么。我还拍到她桌上有一个遥控器一样的东西。`,
        tasks:
          '1. 隐藏你记者的身份和你登岛的真实目的。\n2. 你拍到的照片是关键证据，但直接拿出来会暴露你自己。你需要巧妙地引导大家发现遗书和遥控器的问题。\n3. 你是外来者，嫌疑最大，必须尽快找到凶手。',
        isKiller: true,
      },
    ],
    clues: [
      {
        owner: '高远',
        description:
          '你的电脑回收站里有一份未发送的邮件，内容是向竞争对手的公司投递简历，并附言可以提供“比特无限”的核心代码。',
      },
      { owner: '林雪', description: '在你的抽屉里，发现了一瓶标签被撕掉的化学试剂，经过检验，是无毒的营养液。' },
      { owner: '陈默', description: '一张工作日志，上面写着“20:30-20:31，18楼东区服务器意外重启，原因排查中”。' },
      {
        owner: '张莱',
        description:
          '你的相机里有多张照片，其中一张清晰地拍到死者电脑屏幕上的遗书内容，另一张模糊地拍到了桌上的一个小型遥控装置。',
        isKey: true,
      },
      { owner: '公共', description: '死者手边的咖啡杯里检测出高浓度的氰化物，但奇怪的是，咖啡基本没喝。' },
      {
        owner: '公共',
        description: '书房的通风口内侧，发现一个被改装过的、连接着小型雾化喷嘴的遥控香薰机，里面残留有氰化物液体。',
      },
      { owner: '公共', description: '死者的电脑浏览器历史显示，她在死前最后一个访问的页面是她已故丈夫的纪念网站。' },
    ],
    truth:
      '凶手是记者张莱。他并非想杀死李博士，而是想制造混乱以窃取学术造假的证据。他提前在书房的通风口安装了遥控毒气装置，计划在采访时如果李博士不配合，就少量释放让她昏迷。但他没想到，当晚李博士因为思念亡夫而情绪低落，正在写一封真的遗书。张莱在窗外看到遗书，误以为时机已到，便按下了遥控器，导致李博士吸入过量毒气身亡。他之后尝试进入房间取回装置未果。',
  },
  // --- 【全新剧本2：古堡魅影】 ---
  {
    id: 'built_in_3',
    name: '古堡魅影',
    storyBackground:
      '在浓雾笼罩的偏远古堡里，富有而古怪的伯爵被发现死在反锁的书房中，胸口插着一把古董拆信刀。猛烈的暴风雨切断了城堡与外界的唯一桥梁，所有人都被困于此：伯爵年轻貌美的妻子、与他素有嫌隙的侄子、负债累累的私人医生，以及一位被请来进行降神会的女巫。',
    roles: [
      {
        name: '安娜',
        description: '伯爵的年轻妻子，被外界传言是为了财产才嫁给年迈的伯爵。',
        storyline: `我受够了这段没有爱情的婚姻。我爱上了侄子爱德华，我们计划私奔。\n**晚上8:00**：我和爱德华在花园秘密会面，商量私奔的细节。我告诉他，我找到了一条可以通往书房的密道。\n**晚上9:00**：伯爵把我叫到书房，再次因为我购买奢侈品的事与我争吵，并威胁要修改遗嘱，剥夺我的继承权。我愤怒地离开。\n**晚上9:30**：我回到房间，收拾好我的珠宝准备离开。此时我听到楼下传来一声女人的尖叫，但很快就消失了。\n**晚上10:00**：我从房间的密道入口进入，想去书房偷走遗嘱。当我从书房的壁炉后走出来时，发现伯爵已经倒在血泊里。我吓坏了，立刻原路返回，不敢声张。`,
        tasks:
          '1. 隐藏你和爱德华的私情以及私奔计划。\n2. 隐藏你曾通过密道进入案发现场的事实。\n3. 你认为凶手是其他人，需要尽快找到证据洗脱嫌疑。',
        isKiller: false,
      },
      {
        name: '爱德华',
        description: '伯爵的侄子，放荡不羁，是城堡的法定继承人，但与伯爵关系恶劣。',
        storyline: `我急需用钱，但老家伙一分钱都不肯给我。我今晚准备偷点东西去卖。\n**晚上8:00**：我和安娜在花园见面，她告诉我一条通往书房的密道，这正合我意。\n**晚上8:30**：我看到医生马丁行色匆匆地进了伯爵的书房。\n**晚上9:10**：我准备通过安娜告诉我的密道进入书房，但在密道口听到了里面有奇怪的响动，我害怕被发现，就退了回来。\n**晚上9:40**：我在走廊里遇到了女巫罗兰女士，她警告我今晚城堡会有血光之灾，让我不要乱走动。她的眼神很奇怪，让我不寒而栗。`,
        tasks:
          '1. 隐藏你计划偷窃以及知道密道的事实。\n2. 伯爵死了，你是最大受益人，你的嫌疑最大。你需要将嫌疑转移到他人身上，比如医生或行为诡异的女巫。\n3. 你需要找到对你有利的证据。',
        isKiller: false,
      },
      {
        name: '马丁医生',
        description: '伯爵的私人医生，医术高明，但深陷赌博债务。',
        storyline: `我欠了伯爵一大笔钱，他拿走了我的行医执照作为抵押，并威胁如果我还不上钱，就让我身败名裂。\n**晚上8:30**：我去找伯爵，恳求他再宽限我一段时间。他不仅拒绝了，还羞辱了我一番。我绝望地离开。\n**晚上9:00**：我回到我的房间，准备了一些强效镇定剂，我计划让他睡着，然后偷回我的行医执照。\n**晚上9:20**：我再次来到书房门口，却听到里面安娜和伯爵在激烈争吵。我只好暂时放弃计划，躲在附近观察。\n**晚上9:40后**：我看到安娜气冲冲地离开后，就再也没人进出过书房。我因为害怕一直没敢动手，直到尸体被发现。`,
        tasks:
          '1. 隐藏你欠下巨额赌债并被伯爵威胁的事实。\n2. 隐藏你准备了镇定剂并计划偷东西的意图。\n3. 你是最后一个见到伯爵的人之一，你需要证明你离开后还有作案时间。',
        isKiller: false,
      },
      {
        name: '罗兰女士',
        description: '著名的灵媒、女巫，被伯爵请来进行降神会，与城堡的“幽灵”对话。',
        storyline: `我是个骗子。伯爵发现了我的秘密，并以此敲诈我，让我免费为他“服务”。\n**晚上9:10**：伯爵把我叫到书房，再次威胁我，说如果今晚的降神会不能让他满意，就要揭穿我的一切。我感到前所未有的恐惧。\n**晚上9:30**：我借口准备仪式，独自留在书房。伯爵背对着我，在欣赏一幅画。我看到桌上有一把锋利的拆信刀，一时冲动，拿起刀从背后刺向了他。他当场倒下。我发出一声短促的尖叫，但立刻捂住了嘴。\n**晚上9:35**：我慌乱地将书房门从内反锁，然后从墙角的书架后面启动了密道（这是我之前偷偷发现的），逃离了现场。在密道中，我的一片蕾丝袖口被挂掉了。\n**晚上9:40**：我从密道出来，遇到了爱德华，我故作神秘地警告他有血光之灾，以掩饰我的慌张。`,
        tasks:
          '1. 你是真凶！你的任务是隐藏一切，将罪行嫁祸给他人。\n2. 利用你“女巫”的身份，编造一些鬼神之说来混淆视听。\n3. 爱德华和安娜都知道密道，这是嫁祸他们的好机会。马丁医生有强烈的动机，也可以加以利用。',
        isKiller: true,
      },
    ],
    clues: [
      { owner: '安娜', description: '你的珠宝盒里有一张单程的火车票，目的地是巴黎，时间是明天一早。' },
      { owner: '爱德华', description: '你的口袋里有一张当票，上面是一枚属于伯爵家族的古董怀表。' },
      {
        owner: '马丁医生',
        description: '你的药箱里有一瓶几乎满装的强效镇定剂，以及一张伯爵写的、要求你一周内还清10万英镑欠款的字条。',
      },
      { owner: '罗兰女士', description: '你的长裙袖口处有一块明显的撕裂痕迹，似乎是被什么东西挂坏的。', isKey: true },
      {
        owner: '公共',
        description:
          '在书房壁炉后面发现一个隐蔽的按钮，按下后，旁边的一整面书架会旋转打开，露出一条通往楼上走廊的密道。',
      },
      { owner: '公共', description: '在密道的地板上，发现了一小片黑色的蕾丝布料。' },
      {
        owner: '公共',
        description: '伯爵的书桌上摊开着一本关于“灵媒与欺诈”的书，其中一页用红笔圈出了“罗兰女士”的名字。',
      },
    ],
    truth:
      '凶手是女巫罗兰女士。伯爵发现了她是个骗子并以此敲诈她。当晚，伯爵再次威胁她，罗兰在恐惧和愤怒之下，用拆信刀从背后杀害了伯主。她知道城堡的密道，于是反锁房门，通过密道逃离，伪造了密室杀人案。但慌乱中，她的一片蕾f丝袖口挂在了密道里，成为了关键证据。',
  },
];

// ▲▲▲ 剧本库粘贴结束 ▲▲▲
// ▼▼▼ 【全新】这是狼人杀游戏的状态管理器 ▼▼▼
let werewolfGameState = {
  isActive: false, // 游戏是否正在进行
  players: [], // 玩家列表 { id, name, avatar, role, isAlive, persona }
  roles: {}, // 角色配置 { wolf: 2, villager: 2, ... }
  gamePhase: 'setup', // 游戏阶段: setup, night, day_discussion, day_vote, etc.
  dayNumber: 0, // 天数
  gameLog: [], // 游戏日志
  turnIndex: 0, // 当前发言/行动的玩家索引
  votes: {}, // 投票记录
  seerLastNightResult: null, // 预言家昨晚查验结果
  witchPotions: { save: 1, poison: 1 }, // 女巫药剂
  hunterTarget: null, // 猎人目标
  lastNightKilled: [], // 昨晚被杀的玩家ID
  waitingFor: null, // 当前等待谁的行动: 'seer', 'witch_save', 'witch_poison', 'hunter', 'user_vote'
  gameConfig: {}, // 游戏配置
};
// ▲▲▲ 新增变量结束 ▲▲▲
// ▼▼▼ 【全新】这是海龟汤游戏的状态管理器 ▼▼▼
let seaTurtleSoupState = {
  isActive: false, // 游戏是否正在进行
  phase: 'setup', // 游戏阶段: setup, guessing, reveal
  players: [], // 玩家列表 { id, name, avatar, persona, isUser, isProvider }
  riddleProvider: null, // 出题人对象
  riddle: '', // 谜面
  answer: '', // 谜底
  gameLog: [], // 游戏日志
  currentTurnIndex: 0, // 当前轮到谁行动的索引
};
// ▲▲▲ 新增变量结束 ▲▲▲
// ▼▼▼ 【全新】这是剧本杀游戏的状态管理器 ▼▼▼
let scriptKillGameState = {
  isActive: false, // 游戏是否正在进行
  script: null, // 当前加载的剧本对象
  players: [], // 玩家列表 { id, name, avatar, role, isUser, evidence, persona }
  gamePhase: 'setup', // 游戏阶段: setup, introduction, evidence, discussion, voting, end
  turnIndex: 0, // 当前行动的玩家索引
  gameLog: [], // 游戏日志
  evidenceCounts: {}, // 记录每个玩家已搜证次数
  votes: {}, // 投票记录
  is自由选择: false, // 是否为自由选择角色模式
};
// ▲▲▲ 新增变量结束 ▲▲▲
// ▼▼▼ 在这里粘贴下面的新代码 ▼▼▼
let guessWhatGameState = {
  isActive: false, // 游戏是否正在进行
  mode: 'ai_guesses', // 游戏模式: 'ai_guesses' 或 'user_guesses'
  opponent: null, // 对手玩家对象 { id, name, avatar, persona }
  secretWord: '', // 谜底词语
  gameLog: [], // 游戏日志
  currentTurn: 'user', // 当前轮到谁: 'user' 或 'ai'
};
// ▲▲▲ 新代码粘贴结束 ▲▲▲
// ▼▼▼ 在这里粘贴下面这一整块新代码 ▼▼▼

let ludoGameState = {
  isActive: false,
  opponent: null,
  players: [], // { id, name, avatar, piecePosition: -1 (at home), isUser }
  currentTurnIndex: 0,
  gameLog: [],
  boardLayout: [],
  isDiceRolling: false,
};

const LUDO_BOARD_SIZE = 42; // 总格子数，可以根据你的棋盘布局调整
// ▼▼▼ 【全新】这里是狼人杀游戏的所有核心功能函数 ▼▼▼

/**
 * 【狼人杀】打开游戏设置界面
 */
async function openWerewolfSetup() {
  showScreen('werewolf-setup-screen');
  const selectionEl = document.getElementById('werewolf-player-selection');
  selectionEl.innerHTML = '<p>正在加载角色列表...</p>';

  const singleChats = Object.values(state.chats).filter(chat => !chat.isGroup);
  const allNpcs = Object.values(state.chats).flatMap(chat =>
    (chat.npcLibrary || []).map(npc => ({ ...npc, owner: chat.name })),
  );

  let playerOptions = [
    ...singleChats.map(c => ({ id: c.id, name: c.name, avatar: c.settings.aiAvatar, type: '角色' })),
    ...allNpcs.map(n => ({ id: n.id, name: n.name, avatar: n.avatar, type: `NPC (${n.owner})` })),
  ];

  selectionEl.innerHTML = '';
  playerOptions.forEach(player => {
    const item = document.createElement('div');
    item.className = 'player-selection-item';
    item.innerHTML = `
            <input type="checkbox" class="werewolf-player-checkbox" value="${player.id}">
            <img src="${player.avatar || defaultAvatar}" alt="${player.name}">
            <span class="name">${player.name}</span>
            <span class="type-tag">${player.type}</span>
        `;
    selectionEl.appendChild(item);
  });
  // ▼▼▼ 在这里粘贴下面这块新代码 ▼▼▼
  const inviteModeRadios = document.querySelectorAll('input[name="undercover_invite_mode"]');
  const manualOptions = document.getElementById('undercover-manual-invite-options');
  const randomOptions = document.getElementById('undercover-random-invite-options');

  inviteModeRadios.forEach(radio => {
    radio.addEventListener('change', () => {
      if (radio.value === 'manual') {
        manualOptions.style.display = 'block';
        randomOptions.style.display = 'none';
      } else {
        // random mode
        manualOptions.style.display = 'none'; // 隐藏手动列表
        randomOptions.style.display = 'block'; // 显示随机选项
      }
    });
  });

  // 默认触发一次，以确保初始状态正确
  document.querySelector('input[name="undercover_invite_mode"]:checked').dispatchEvent(new Event('change'));
  // ▲▲▲ 粘贴结束 ▲▲▲
}

/**
 * 【狼人杀】开始游戏的核心逻辑
 */
async function startWerewolfGame() {
  const countSelect = document.getElementById('werewolf-player-count');
  const totalPlayers = parseInt(countSelect.value);

  const selectedCheckboxes = document.querySelectorAll('.werewolf-player-checkbox:checked');
  // 邀请的AI/NPC数量必须是总人数-1（因为User是必须加入的）
  if (selectedCheckboxes.length !== totalPlayers - 1) {
    alert(`请选择 ${totalPlayers - 1} 位AI或NPC玩家！`);
    return;
  }

  // --- 1. 重置并初始化游戏状态 ---
  werewolfGameState = {
    isActive: true,
    players: [],
    roles: {},
    gamePhase: 'start',
    dayNumber: 0,
    gameLog: [],
    turnIndex: 0,
    votes: {},
    seerLastNightResult: null,
    witchPotions: { save: 1, poison: 1 },
    hunterTarget: null,
    lastNightKilled: [],
    waitingFor: null,
    gameConfig: { totalPlayers },
  };

  // --- 2. 收集玩家信息 ---
  // 添加User
  werewolfGameState.players.push({
    id: 'user',
    name: state.qzoneSettings.nickname || '我',
    avatar: state.qzoneSettings.avatar || defaultAvatar,
    isAlive: true,
    isUser: true, // 标记为真实用户
  });

  // 添加被邀请的AI和NPC
  selectedCheckboxes.forEach(checkbox => {
    const playerId = checkbox.value;
    const chat = Object.values(state.chats).find(c => c.id === playerId);
    if (chat) {
      // 是主要角色
      werewolfGameState.players.push({
        id: chat.id,
        name: chat.name,
        avatar: chat.settings.aiAvatar,
        persona: chat.settings.aiPersona,
        isAlive: true,
        isUser: false,
      });
    } else {
      // 是NPC
      for (const c of Object.values(state.chats)) {
        const npc = (c.npcLibrary || []).find(n => n.id === playerId);
        if (npc) {
          werewolfGameState.players.push({
            id: npc.id,
            name: npc.name,
            avatar: npc.avatar,
            persona: npc.persona,
            isAlive: true,
            isUser: false,
          });
          break;
        }
      }
    }
  });

  // 打乱玩家顺序（座位顺序）
  werewolfGameState.players.sort(() => Math.random() - 0.5);

  // --- 3. 根据人数分配角色 ---
  const roleConfigs = {
    6: { wolf: 2, villager: 2, seer: 1, guard: 1 },
    9: { wolf: 3, villager: 3, seer: 1, witch: 1, hunter: 1 },
    12: { wolf: 4, villager: 4, seer: 1, witch: 1, hunter: 1, idiot: 1 },
  };
  // ▼▼▼ 【核心Bug修复】用这块代码替换上面的错误代码 ▼▼▼
  const rolesToAssign = [];
  const config = roleConfigs[totalPlayers];
  werewolfGameState.roles = config; // 将角色配置存入游戏状态
  for (const role in config) {
    for (let i = 0; i < config[role]; i++) {
      // 修正：config[i] -> config[role]
      rolesToAssign.push(role);
    }
  }
  // ▲▲▲ 修复结束 ▲▲▲
  rolesToAssign.sort(() => Math.random() - 0.5); // 打乱角色

  werewolfGameState.players.forEach((player, index) => {
    player.role = rolesToAssign[index];
  });
  // ▼▼▼ 在这里添加下面的新代码 ▼▼▼
  // ▼▼▼ 第1处修改（添加翻译）▼▼▼
  const roleNameMap = {
    wolf: '狼人',
    villager: '平民',
    seer: '预言家',
    witch: '女巫',
    hunter: '猎人',
    guard: '守卫',
    idiot: '白痴',
  };

  // 弹窗告知用户身份
  const userPlayer = werewolfGameState.players.find(p => p.isUser);
  if (userPlayer) {
    const myRoleName = roleNameMap[userPlayer.role] || userPlayer.role;
    await showCustomAlert('你的身份', `你在本局游戏中的身份是：【${myRoleName}】`);
  }
  // ▲▲▲ 修改结束 ▲▲▲
  // --- 4. 切换到游戏界面并开始游戏循环 ---
  showScreen('werewolf-game-screen');
  await processGameTurn();
}

// ▼▼▼ 用这【一整块】全新的游戏引擎代码，替换旧的 processGameTurn 函数 ▼▼▼
/**
 * 【狼人杀 V2】游戏主循环/引擎
 */
async function processGameTurn() {
  if (!werewolfGameState.isActive) return;

  renderWerewolfGameScreen();

  switch (werewolfGameState.gamePhase) {
    case 'start':
      logToWerewolfGame('游戏开始，正在分配身份...');
      const roleNameMapForLog = {
        wolf: '狼人',
        villager: '平民',
        seer: '预言家',
        witch: '女巫',
        hunter: '猎人',
        guard: '守卫',
        idiot: '白痴',
      };
      const configText = Object.entries(werewolfGameState.roles)
        .map(([role, count]) => `${roleNameMapForLog[role] || role}x${count}`)
        .join(', ');
      logToWerewolfGame(`本局配置: ${configText}`);
      werewolfGameState.gamePhase = 'night_start';
      await sleep(3000);
      await processGameTurn();
      break;

    case 'night_start':
      werewolfGameState.dayNumber++;
      werewolfGameState.lastNightKilled = [];
      werewolfGameState.votes = {};
      logToWerewolfGame(`第 ${werewolfGameState.dayNumber} 天，天黑请闭眼。`);
      werewolfGameState.gamePhase = 'guard_action'; // 从守卫开始
      await sleep(2000);
      await processGameTurn();
      break;

    // 【守卫行动阶段】
    case 'guard_action':
      const guard = werewolfGameState.players.find(p => p.role === 'guard' && p.isAlive);
      if (guard) {
        logToWerewolfGame('守卫请睁眼，请选择你要守护的玩家。');
        let protectedId;
        // ★★★ 核心检查点1：判断守卫是不是User ★★★
        if (guard.isUser) {
          // 如果是，就调用waitForUserAction，这会弹出操作框
          protectedId = await waitForUserAction('请选择你要守护的玩家', 'guard_protect');
        } else {
          // 如果不是，就让AI自己决策
          protectedId = await triggerWerewolfAiAction(guard.id, 'guard_protect');
        }
        werewolfGameState.guardLastNightProtected = protectedId;
        logToWerewolfGame(`守卫请闭眼。`);
      }
      werewolfGameState.gamePhase = 'wolf_action';
      await sleep(2000);
      await processGameTurn();
      break;

    // ▼▼▼ 用这块【狼人频道增强+平票处理版】的代码替换旧的 'wolf_action' case ▼▼▼
    case 'wolf_action':
      logToWerewolfGame('狼人请睁眼，请选择一个目标。');
      const wolves = werewolfGameState.players.filter(p => p.role === 'wolf' && p.isAlive);
      const userPlayer = wolves.find(w => w.isUser);
      let allWolfVotes = [];

      // 场景1: 用户是狼人
      if (userPlayer) {
        const aiWolves = wolves.filter(w => !w.isUser);
        let suggestionsText = '🐺 狼人频道 (秘密):\n';

        if (aiWolves.length > 0) {
          // 从AI队友获取建议
          const aiVotePromises = aiWolves.map(wolf =>
            triggerWerewolfAiAction(wolf.id, 'wolf_kill', { isUserWolfAlly: true }),
          );
          const aiVotes = (await Promise.all(aiVotePromises)).filter(Boolean);
          allWolfVotes.push(...aiVotes);

          // 格式化建议给用户看
          aiVotes.forEach((targetId, index) => {
            const votingWolf = aiWolves[index];
            const targetPlayer = werewolfGameState.players.find(p => p.id === targetId);
            if (votingWolf && targetPlayer) {
              suggestionsText += `- ${votingWolf.name} 提议击杀: ${targetPlayer.name}\n`;
            }
          });
          suggestionsText += '\n请参考队友意见后进行投票。';

          await showCustomAlert('狼人请沟通', suggestionsText);
        } else {
          await showCustomAlert('你是唯一的狼', '请独自决定今晚的目标。');
        }

        // 获取用户的最终投票
        const userVote = await waitForUserAction('请选择最终攻击目标', 'wolf_kill');
        if (userVote) {
          allWolfVotes.push(userVote);
        }
      } else {
        // 场景2: 用户不是狼人，AI狼人自行决定
        const wolfPromises = wolves.map(wolf => triggerWerewolfAiAction(wolf.id, 'wolf_kill'));
        const wolfVotes = (await Promise.all(wolfPromises)).filter(Boolean);
        allWolfVotes.push(...wolfVotes);
      }

      // 统计所有狼人的投票
      const voteCounts = {};
      allWolfVotes.forEach(vote => {
        voteCounts[vote] = (voteCounts[vote] || 0) + 1;
      });

      let maxVotes = 0;
      let targetId = null;
      let tied = false;
      for (const id in voteCounts) {
        if (voteCounts[id] > maxVotes) {
          maxVotes = voteCounts[id];
          targetId = id;
          tied = false;
        } else if (voteCounts[id] === maxVotes) {
          tied = true;
        }
      }

      // ★★★ 这就是我们新增的平票处理逻辑！★★★
      if (tied && maxVotes > 0) {
        // 如果出现平票，就从所有平票的目标中随机选择一个
        const tiedTargets = Object.keys(voteCounts).filter(id => voteCounts[id] === maxVotes);
        targetId = tiedTargets[Math.floor(Math.random() * tiedTargets.length)];
        logToWerewolfGame(
          `(狼人内部经过一番激烈讨论，最终决定目标为 ${werewolfGameState.players.find(p => p.id === targetId).name})`,
        );
      }

      if (targetId) {
        // 只要有目标（无论是统一意见还是随机决定），就执行击杀
        werewolfGameState.lastNightKilled = [targetId];
        logToWerewolfGame(`狼人请闭眼。`);
      } else {
        // 只有在所有狼人都没投票的情况下，才会是平安夜
        logToWerewolfGame(`狼人放弃了行动，今晚无人被袭击。`);
        werewolfGameState.lastNightKilled = [];
      }

      // 进入下一个游戏阶段
      werewolfGameState.gamePhase = 'seer_action';
      await sleep(2000);
      await processGameTurn();
      break;
    // ▲▲▲ 替换结束 ▲▲▲

    // 【预言家行动阶段】
    case 'seer_action':
      const seer = werewolfGameState.players.find(p => p.role === 'seer' && p.isAlive);
      if (seer) {
        logToWerewolfGame('预言家请睁眼，请选择你要查验的玩家。');
        let targetId;
        // ★★★ 核心检查点3：判断预言家是不是User ★★★
        if (seer.isUser) {
          targetId = await waitForUserAction('请选择你要查验的玩家', 'seer_check');
        } else {
          targetId = await triggerWerewolfAiAction(seer.id, 'seer_check');
        }
        const targetPlayer = werewolfGameState.players.find(p => p.id === targetId);
        const isWolf = targetPlayer.role === 'wolf';
        werewolfGameState.seerLastNightResult = { targetName: targetPlayer.name, isWolf: isWolf };
        logToWerewolfGame(`预言家请闭眼。`);
        if (seer.isUser) {
          await showCustomAlert('查验结果', `${targetPlayer.name} 的身份是：${isWolf ? '狼人' : '好人'}`);
        }
      }
      werewolfGameState.gamePhase = 'witch_action';
      await sleep(2000);
      await processGameTurn();
      break;

    // 【女巫行动阶段】
    case 'witch_action':
      const witch = werewolfGameState.players.find(p => p.role === 'witch' && p.isAlive);
      if (witch) {
        logToWerewolfGame('女巫请睁眼。');
        const killedId = werewolfGameState.lastNightKilled[0];
        let killedPlayerName = null;
        if (killedId) {
          killedPlayerName = werewolfGameState.players.find(p => p.id === killedId).name;
          logToWerewolfGame(`今晚 ${killedPlayerName} 被袭击了。`);
        }

        let witchAction;
        // ★★★ 核心检查点4：判断女巫是不是User ★★★
        if (witch.isUser) {
          witchAction = await waitForUserAction('女巫请行动', 'witch_action', { killedId, killedPlayerName });
        } else {
          witchAction = await triggerWerewolfAiAction(witch.id, 'witch_action', { killedId });
        }

        if (witchAction?.action === 'save' && killedId) {
          werewolfGameState.lastNightKilled = [];
          werewolfGameState.witchPotions.save = 0;
        } else if (witchAction?.action === 'poison' && witchAction.targetId) {
          werewolfGameState.lastNightKilled.push(witchAction.targetId);
          werewolfGameState.witchPotions.poison = 0;
        }
      }
      logToWerewolfGame(`女巫请闭眼。`);
      werewolfGameState.gamePhase = 'day_start';
      await sleep(2000);
      await processGameTurn();
      break;

    case 'day_start':
      logToWerewolfGame('天亮了。');
      let deathAnnouncements = [];
      const deathsThisNight = new Set();

      werewolfGameState.lastNightKilled.forEach(killedId => {
        if (killedId === werewolfGameState.guardLastNightProtected) {
          logToWerewolfGame(
            `昨晚 ${werewolfGameState.players.find(p => p.id === killedId).name} 被袭击但同时也被守护了。`,
          );
        } else {
          deathsThisNight.add(killedId);
        }
      });

      if (deathsThisNight.size === 0) {
        logToWerewolfGame('昨晚是一个平安夜。');
      } else {
        deathsThisNight.forEach(deadId => {
          const deadPlayer = werewolfGameState.players.find(p => p.id === deadId);
          if (deadPlayer.isAlive) {
            deadPlayer.isAlive = false;
            deathAnnouncements.push(`${deadPlayer.name} 昨晚被淘汰了。`);
          }
        });
        deathAnnouncements.forEach(announcement => logToWerewolfGame(announcement));
      }

      renderWerewolfGameScreen();
      if (checkGameOver()) return;

      let hunterDied = null;
      deathsThisNight.forEach(deadId => {
        const deadPlayer = werewolfGameState.players.find(p => p.id === deadId);
        if (deadPlayer.role === 'hunter') hunterDied = deadPlayer;
      });

      if (hunterDied) {
        logToWerewolfGame(`${hunterDied.name} 是猎人，可以选择一名玩家带走。`);
        let targetId;
        // ★★★ 核心检查点5：判断猎人是不是User ★★★
        if (hunterDied.isUser) {
          targetId = await waitForUserAction('请选择你要带走的玩家', 'hunter_shoot');
        } else {
          targetId = await triggerWerewolfAiAction(hunterDied.id, 'hunter_shoot');
        }
        if (targetId) {
          const targetPlayer = werewolfGameState.players.find(p => p.id === targetId);
          targetPlayer.isAlive = false;
          logToWerewolfGame(`猎人开枪带走了 ${targetPlayer.name}。`);
          renderWerewolfGameScreen();
          if (checkGameOver()) return;
        }
      }

      werewolfGameState.gamePhase = 'day_discussion';
      await sleep(2000);
      await processGameTurn();
      break;

    case 'day_discussion':
      logToWerewolfGame('现在开始依次发言。');
      const alivePlayersForSpeech = werewolfGameState.players.filter(p => p.isAlive);
      for (const player of alivePlayersForSpeech) {
        renderWerewolfGameScreen({ speakingPlayerId: player.id });
        let speech;
        if (player.isUser) {
          speech = await waitForUserAction('轮到你发言', 'speak');
        } else {
          speech = await triggerWerewolfAiAction(player.id, 'speak');
        }
        logToWerewolfGame({ player: player, speech: speech }, 'speech');
        await sleep(1000);
      }
      renderWerewolfGameScreen();
      werewolfGameState.gamePhase = 'day_vote';
      await processGameTurn();
      break;

    case 'day_vote':
      logToWerewolfGame('请投票选出你认为是狼人的玩家。');
      const voterPromises = werewolfGameState.players
        .filter(p => p.isAlive)
        .map(player => {
          if (player.isUser) {
            return waitForUserAction('请投票', 'vote');
          } else {
            return triggerWerewolfAiAction(player.id, 'vote');
          }
        });
      const allVotesResult = (await Promise.all(voterPromises)).filter(Boolean);

      const voteTallyResult = {};
      allVotesResult.forEach(vote => {
        voteTallyResult[vote] = (voteTallyResult[vote] || 0) + 1;
      });

      let maxVotesResult = 0,
        playersToEliminate = [];
      for (const playerId in voteTallyResult) {
        if (voteTallyResult[playerId] > maxVotesResult) {
          maxVotesResult = voteTallyResult[playerId];
          playersToEliminate = [playerId];
        } else if (voteTallyResult[playerId] === maxVotesResult) {
          playersToEliminate.push(playerId);
        }
      }

      if (playersToEliminate.length === 1) {
        const eliminatedPlayer = werewolfGameState.players.find(p => p.id === playersToEliminate[0]);
        eliminatedPlayer.isAlive = false;
        logToWerewolfGame(`投票结果：${eliminatedPlayer.name} 被淘汰。`);
        renderWerewolfGameScreen();
        if (checkGameOver()) return;
        if (eliminatedPlayer.role === 'hunter') {
          logToWerewolfGame(`${eliminatedPlayer.name} 是猎人，可以选择一名玩家带走。`);
          let targetId;
          if (eliminatedPlayer.isUser) {
            targetId = await waitForUserAction('请选择你要带走的玩家', 'hunter_shoot');
          } else {
            targetId = await triggerWerewolfAiAction(eliminatedPlayer.id, 'hunter_shoot');
          }
          if (targetId) {
            const targetPlayer = werewolfGameState.players.find(p => p.id === targetId);
            targetPlayer.isAlive = false;
            logToWerewolfGame(`猎人开枪带走了 ${targetPlayer.name}。`);
            renderWerewolfGameScreen();
            if (checkGameOver()) return;
          }
        }
      } else {
        logToWerewolfGame('投票平票，无人出局。');
      }

      werewolfGameState.gamePhase = 'night_start';
      await sleep(3000);
      await processGameTurn();
      break;
  }
}
// ▲▲▲ 新引擎代码结束 ▲▲▲

/**
 * 【狼人杀】渲染游戏主界面
 */
function renderWerewolfGameScreen(options = {}) {
  const playersGrid = document.getElementById('werewolf-players-grid');
  const logContainer = document.getElementById('werewolf-game-log');

  // 渲染玩家座位
  playersGrid.innerHTML = '';
  werewolfGameState.players.forEach(player => {
    const seat = document.createElement('div');
    seat.className = 'player-seat';
    const avatarClass = `player-avatar ${!player.isAlive ? 'dead' : ''} ${
      options.speakingPlayerId === player.id ? 'speaking' : ''
    } ${options.activePlayerId === player.id ? 'active-turn' : ''}`;

    let roleIndicator = '';
    const user = werewolfGameState.players.find(p => p.isUser);
    // 如果我是狼人，显示所有狼人队友
    if (user.role === 'wolf' && player.role === 'wolf') {
      roleIndicator = '<div class="player-role-indicator" style="display: flex;">W</div>';
    }

    seat.innerHTML = `
            ${roleIndicator}
            <img src="${player.avatar}" class="${avatarClass}">
            <span class="player-name">${player.name} (${player.isAlive ? '存活' : '淘汰'})</span>
        `;
    playersGrid.appendChild(seat);
  });

  // 渲染游戏日志
  logContainer.innerHTML = werewolfGameState.gameLog
    .map(log => {
      // 判断是否为发言类型的日志
      if (log.type === 'speech' && typeof log.message === 'object') {
        const { player, speech } = log.message;
        // 如果是，就渲染带有头像的新结构
        return `
            <div class="log-entry speech">
                <img src="${player.avatar}" class="speech-avatar">
                <div class="speech-content">
                    <span class="speaker">${player.name}</span>
                    <span class="speech-text">${speech.replace(/\n/g, '<br>')}</span>
                </div>
            </div>
        `;
      } else {
        // 否则，保持原来的系统消息样式
        return `<div class="log-entry ${log.type}">${String(log.message).replace(/\n/g, '<br>')}</div>`;
      }
    })
    .join('');
  logContainer.scrollTop = logContainer.scrollHeight;
}

/**
 * 【狼人杀】等待用户投票
 */
function waitForUserVote() {
  return new Promise(resolve => {
    const actionArea = document.getElementById('werewolf-action-area');
    const alivePlayers = werewolfGameState.players.filter(p => p.isAlive && !p.isUser);

    actionArea.innerHTML = '<h5>请投票:</h5>';
    const grid = document.createElement('div');
    grid.className = 'vote-target-grid';

    alivePlayers.forEach(player => {
      const btn = document.createElement('button');
      btn.className = 'form-button-secondary vote-target-btn';
      btn.textContent = player.name;
      btn.onclick = () => {
        actionArea.innerHTML = '';
        resolve(player.id);
      };
      grid.appendChild(btn);
    });
    actionArea.appendChild(grid);
  });
}

/**
 * 【狼人杀】添加一条游戏日志
 */
function logToWerewolfGame(message, type = 'system') {
  werewolfGameState.gameLog.push({ message, type });
  renderWerewolfGameScreen();
}
/**
 * 【狼人杀-AI核心】调用AI为整局游戏生成复盘摘要
 * @returns {Promise<string>} - AI生成的摘要文本
 */
async function generateAiGameSummary() {
  const { proxyUrl, apiKey, model } = state.apiConfig;
  if (!proxyUrl || !apiKey || !model) {
    return '（AI摘要生成失败：API未配置）';
  }

  // 格式化完整的游戏日志，让AI能够理解
  const formattedLog = werewolfGameState.gameLog
    .map(log => {
      if (log.type === 'speech') {
        return `${log.message.player.name}: ${log.message.speech}`;
      }
      return log.message;
    })
    .join('\n');

  const prompt = `
# 任务
你是一位专业的狼人杀复盘分析师。请根据以下完整的游戏日志，用100-150字，客观、精炼地总结本局游戏的【关键事件】和【转折点】。

# 核心要求
- 你的总结需要有逻辑、有条理。
- 指出关键玩家的行为，例如预言家的查验、女巫的操作、猎人的开枪等。
- 分析狼人阵营和好人阵营的博弈过程。
- 你的输出【必须且只能】是复盘摘要的纯文本内容，不要包含任何额外的对话或标题。

# 游戏日志
${formattedLog}
`;

  try {
    const messagesForApi = [{ role: 'user', content: prompt }];
    let isGemini = proxyUrl === GEMINI_API_URL;
    let geminiConfig = toGeminiRequestData(model, apiKey, prompt, messagesForApi, isGemini);

    const response = isGemini
      ? await fetch(geminiConfig.url, geminiConfig.data)
      : await fetch(`${proxyUrl}/v1/chat/completions`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${apiKey}` },
          body: JSON.stringify({
            model: model,
            messages: messagesForApi,
            temperature: parseFloat(state.apiConfig.temperature) || 0.8,
          }),
        });

    if (!response.ok) throw new Error(await response.text());
    const data = await response.json();
    return (isGemini ? data.candidates[0].content.parts[0].text : data.choices[0].message.content).trim();
  } catch (error) {
    console.error('AI摘要生成失败:', error);
    return '（AI摘要生成失败，请检查网络或API设置）';
  }
}

/**
 * 【狼人杀 V2 - 增强版】生成游戏复盘的文本，包含AI摘要
 * @param {string} winner - 胜利的阵营名称
 * @param {string} aiSummary - AI生成的摘要文本
 * @returns {string} - 格式化后的完整复盘Markdown文本
 */
function generateWerewolfSummary(winner, aiSummary) {
  const roleNameMap = {
    wolf: '狼人',
    villager: '平民',
    seer: '预言家',
    witch: '女巫',
    hunter: '猎人',
    guard: '守卫',
    idiot: '白痴',
  };

  let summaryText = `**狼人杀 - 游戏复盘**\n\n`; // 优化标题
  summaryText += `🏆 **胜利方:** ${winner}\n`;
  summaryText += `📅 **游戏天数:** ${werewolfGameState.dayNumber} 天\n\n`;

  // 加入AI生成的摘要
  summaryText += `**本局摘要:**\n${aiSummary}\n\n`;

  summaryText += `**玩家复盘:**\n`;
  werewolfGameState.players.forEach(p => {
    const status = p.isAlive ? '存活' : '淘汰';
    const roleName = roleNameMap[p.role] || p.role;
    summaryText += `- ${p.name} (${roleName}) - ${status}\n`;
  });

  return summaryText;
}

/**
 * 【狼人杀】打开复盘发送目标选择器
 * @param {string} summaryText - 要发送的复盘文本
 */
function openWerewolfSummaryTargetPicker(summaryText) {
  const modal = document.getElementById('werewolf-target-picker-modal');
  const listEl = document.getElementById('werewolf-target-list');
  listEl.innerHTML = '';

  const aiPlayers = werewolfGameState.players.filter(p => !p.isUser);

  if (aiPlayers.length === 0) {
    alert('没有可发送的AI玩家。');
    return;
  }

  // 渲染可选的AI玩家列表
  aiPlayers.forEach(player => {
    const item = document.createElement('div');
    item.className = 'player-selection-item'; // 复用之前的样式
    item.innerHTML = `
            <input type="checkbox" class="werewolf-target-checkbox" value="${player.id}" checked>
            <img src="${player.avatar || defaultAvatar}" alt="${player.name}">
            <span class="name">${player.name}</span>
        `;
    listEl.appendChild(item);
  });

  // 绑定按钮事件
  const confirmBtn = document.getElementById('wt-confirm-btn');
  const newConfirmBtn = confirmBtn.cloneNode(true);
  confirmBtn.parentNode.replaceChild(newConfirmBtn, confirmBtn);
  newConfirmBtn.onclick = () => {
    const selectedIds = Array.from(document.querySelectorAll('.werewolf-target-checkbox:checked')).map(cb => cb.value);
    if (selectedIds.length > 0) {
      sendSummaryToSelectedPlayers(summaryText, selectedIds);
    } else {
      alert('请至少选择一个发送对象！');
    }
  };

  const cancelBtn = document.getElementById('wt-cancel-btn');
  cancelBtn.onclick = () => modal.classList.remove('visible');

  document.getElementById('wt-select-all-btn').onclick = () => {
    document.querySelectorAll('.werewolf-target-checkbox').forEach(cb => (cb.checked = true));
  };
  document.getElementById('wt-deselect-all-btn').onclick = () => {
    document.querySelectorAll('.werewolf-target-checkbox').forEach(cb => (cb.checked = false));
  };

  modal.classList.add('visible');
}

/**
 * 【狼人杀】显示游戏结算卡片模态框
 * @param {string} summaryText - 复盘文本
 */
function showWerewolfSummaryModal(summaryText) {
  const modal = document.getElementById('werewolf-summary-modal');
  const contentEl = document.getElementById('werewolf-summary-content');

  // 使用你已有的Markdown渲染函数，让复盘更好看
  contentEl.innerHTML = renderMarkdown(summaryText);

  // 为按钮绑定事件 (使用克隆节点防止重复绑定)
  const repostBtn = document.getElementById('repost-summary-btn');
  const newRepostBtn = repostBtn.cloneNode(true);
  repostBtn.parentNode.replaceChild(newRepostBtn, repostBtn);
  newRepostBtn.onclick = () => openWerewolfSummaryTargetPicker(summaryText);

  const backBtn = document.getElementById('back-to-hall-btn');
  const newBackBtn = backBtn.cloneNode(true);
  backBtn.parentNode.replaceChild(newBackBtn, backBtn);
  newBackBtn.onclick = () => {
    modal.classList.remove('visible');
    showScreen('game-hall-screen');
  };

  modal.classList.add('visible');
}
/**
 * 【狼人杀 V2 - 增强版】将游戏复盘发送到【选定】的AI角色的聊天中
 * @param {string} summaryText - 复盘文本
 * @param {string[]} targetIds - 目标AI角色的ID数组
 */
async function sendSummaryToSelectedPlayers(summaryText, targetIds) {
  // 先关闭所有可能打开的弹窗
  document.getElementById('werewolf-summary-modal').classList.remove('visible');
  document.getElementById('werewolf-target-picker-modal').classList.remove('visible');

  const aiPlayers = werewolfGameState.players.filter(p => !p.isUser);
  let sentCount = 0;

  const aiContext = `[系统指令：刚刚结束了一局狼人杀，这是游戏复盘。请根据这个复盘内容，以你的角色人设，和用户聊聊刚才的游戏。]\n\n${summaryText}`;

  for (const chatId of targetIds) {
    const chat = state.chats[chatId];
    if (chat) {
      // ▼▼▼ 核心修改就在这里 ▼▼▼
      // 1. 创建对用户可见的【复盘卡片】消息
      const visibleMessage = {
        role: 'user',
        type: 'text',
        timestamp: Date.now(),
        content: summaryText,
      };

      // 2. 创建对AI可见的【隐藏指令】
      const hiddenInstruction = {
        role: 'system',
        content: aiContext,
        timestamp: Date.now() + 1,
        isHidden: true,
      };

      // 3. 将【两条】消息推入历史记录
      chat.history.push(visibleMessage, hiddenInstruction);
      await db.chats.put(chat);
      sentCount++;
      // ▲▲▲ 修改结束 ▲▲▲
    }
  }

  await showCustomAlert('发送成功', `游戏复盘已发送至 ${sentCount} 位AI角色的聊天中！`);
  showScreen('game-hall-screen');
}

// ▼▼▼ 用这个【修正后】的函数替换旧的 checkGameOver ▼▼▼
function checkGameOver() {
  const alivePlayers = werewolfGameState.players.filter(p => p.isAlive);
  const aliveWolves = alivePlayers.filter(p => p.role === 'wolf').length;
  const aliveGods = alivePlayers.filter(p => ['seer', 'witch', 'hunter', 'guard', 'idiot'].includes(p.role)).length;
  const aliveVillagers = alivePlayers.filter(p => p.role === 'villager').length;

  let winner = null;

  if (aliveWolves === 0) {
    winner = '好人阵营';
  } else if (aliveWolves >= aliveGods + aliveVillagers) {
    winner = '狼人阵营';
  } else if (aliveGods === 0 && aliveVillagers === 0) {
    winner = '狼人阵营';
  }

  if (winner) {
    logToWerewolfGame(`游戏结束！${winner}胜利！`);
    const roleNameMap = {
      wolf: '狼人',
      villager: '平民',
      seer: '预言家',
      witch: '女巫',
      hunter: '猎人',
      guard: '守卫',
      idiot: '白痴',
    };
    const rolesReveal = werewolfGameState.players.map(p => `${p.name}: ${roleNameMap[p.role] || p.role}`).join('\n');
    logToWerewolfGame(`身份公布:\n${rolesReveal}`);

    // 【核心修改】在这里调用AI生成摘要并显示结算卡
    (async () => {
      await showCustomAlert('请稍候...', 'AI正在生成本局摘要...');
      const aiSummary = await generateAiGameSummary();
      const summary = generateWerewolfSummary(winner, aiSummary);
      showWerewolfSummaryModal(summary);
    })();

    werewolfGameState.isActive = false;
    document.getElementById('werewolf-action-area').innerHTML = '';

    return true;
  }

  return false;
}
// ▲▲▲ 替换结束 ▲▲▲

// ▼▼▼ 【狼人杀输入框美化】请用这个【全新】的函数，完整替换掉你旧的 waitForUserAction 函数 ▼▼▼
/**
 * 【狼人杀 V2 - 输入框美化版】等待用户行动的通用函数
 */
function waitForUserAction(prompt, actionType, context = {}) {
  const me = werewolfGameState.players.find(p => p.isUser);
  if (me && !me.isAlive) {
    const actionArea = document.getElementById('werewolf-action-area');
    actionArea.innerHTML = `<h5>您已淘汰，正在观战...</h5>`;
    return new Promise(async resolve => {
      await sleep(3000);
      actionArea.innerHTML = '';
      resolve(null);
    });
  }

  return new Promise(resolve => {
    const actionArea = document.getElementById('werewolf-action-area');
    actionArea.innerHTML = ''; // 清空，准备新的UI
    actionArea.className = 'werewolf-action-area'; // 重置class

    if (actionType === 'speak') {
      // --- 这是我们美化后的发言输入区 ---
      actionArea.classList.add('speaking-mode'); // 激活新CSS

      const textarea = document.createElement('textarea');
      textarea.id = 'user-speech-input';
      textarea.rows = 1;
      textarea.placeholder = '请输入你的发言...';
      // 实时调整高度
      textarea.addEventListener('input', () => {
        textarea.style.height = 'auto';
        textarea.style.height = textarea.scrollHeight + 'px';
      });

      const endBtn = document.createElement('button');
      endBtn.id = 'end-speech-btn';
      endBtn.className = 'form-button'; // 保留一个基础class
      endBtn.textContent = '结束发言';

      actionArea.appendChild(textarea);
      actionArea.appendChild(endBtn);

      textarea.focus();

      endBtn.onclick = () => {
        const speech = textarea.value.trim() || '我过麦。';
        actionArea.innerHTML = '';
        actionArea.classList.remove('speaking-mode');
        resolve(speech);
      };
      return; // 结束 'speak' 分支
    }

    // --- 以下是其他非发言动作的UI，保持原样 ---
    actionArea.innerHTML = `<h5>${prompt}</h5>`;
    const grid = document.createElement('div');
    grid.className = 'vote-target-grid';

    if (actionType === 'witch_action') {
      if (context.killedId && werewolfGameState.witchPotions.save > 0) {
        const saveBtn = document.createElement('button');
        saveBtn.className = 'form-button';
        saveBtn.textContent = `使用解药救 ${context.killedPlayerName}`;
        saveBtn.onclick = () => {
          actionArea.innerHTML = '';
          resolve({ action: 'save' });
        };
        grid.appendChild(saveBtn);
      }
      if (werewolfGameState.witchPotions.poison > 0) {
        const poisonBtn = document.createElement('button');
        poisonBtn.className = 'form-button form-button-secondary';
        poisonBtn.textContent = '使用毒药';
        poisonBtn.onclick = async () => {
          const targetId = await waitForUserAction('选择要毒杀的玩家', 'witch_poison_target');
          resolve({ action: 'poison', targetId: targetId });
        };
        grid.appendChild(poisonBtn);
      }
      const passBtn = document.createElement('button');
      passBtn.className = 'form-button form-button-secondary';
      passBtn.textContent = '跳过';
      passBtn.onclick = () => {
        actionArea.innerHTML = '';
        resolve({ action: 'none' });
      };
      grid.appendChild(passBtn);
      actionArea.appendChild(grid);
      return;
    }

    let targets = [];
    if (['guard_protect', 'seer_check', 'hunter_shoot', 'witch_poison_target'].includes(actionType)) {
      targets = werewolfGameState.players.filter(p => p.isAlive);
    } else if (actionType === 'wolf_kill') {
      targets = werewolfGameState.players.filter(p => p.isAlive && p.role !== 'wolf');
    } else if (actionType === 'vote') {
      targets = werewolfGameState.players.filter(p => p.isAlive);
    }

    targets.forEach(player => {
      const btn = document.createElement('button');
      btn.className = 'form-button-secondary vote-target-btn';
      btn.textContent = player.name;
      btn.onclick = () => {
        actionArea.innerHTML = '';
        resolve(player.id);
      };
      grid.appendChild(btn);
    });

    if (actionType === 'vote') {
      const passBtn = document.createElement('button');
      passBtn.className = 'form-button-secondary vote-target-btn';
      passBtn.textContent = '弃票';
      passBtn.onclick = () => {
        actionArea.innerHTML = '';
        resolve(null);
      };
      grid.appendChild(passBtn);
    }
    actionArea.appendChild(grid);
  });
}
// ▲▲▲ 替换结束 ▲▲▲

/**
 * 【狼人杀AI核心 V3 - 终极修复版】
 * @param {string} playerId - 触发行动的AI玩家ID
 * @param {string} action - AI需要执行的动作，例如 'speak', 'vote'
 * @param {object} context - 附加信息，例如女巫的救人目标
 * @returns {Promise<any>} - AI的决策结果
 */
async function triggerWerewolfAiAction(playerId, action, context = {}) {
  const player = werewolfGameState.players.find(p => p.id === playerId);
  if (!player || !player.isAlive) return null;

  const { proxyUrl, apiKey, model } = state.apiConfig;

  let actionPrompt = '';
  let jsonFormat = '';

  // 1. 构建一个清晰的、包含所有存活玩家及其ID的列表
  const alivePlayersList = werewolfGameState.players
    .filter(p => p.isAlive)
    .map(p => `- ${p.name} (id: ${p.id})`)
    .join('\n');

  // 2. 构建完整的游戏日志，这是AI的“记忆核心”
  const fullGameLog = werewolfGameState.gameLog
    .map(log => {
      if (log.type === 'speech') {
        return `${log.message.player.name}: ${log.message.speech}`;
      }
      return log.message.replace(/<strong>/g, '').replace(/<\/strong>/g, ''); // 移除HTML标签
    })
    .join('\n');

  let extraContext = '';
  // 如果是预言家发言，提供专属情报
  if (player.role === 'seer' && action === 'speak' && werewolfGameState.seerLastNightResult) {
    const result = werewolfGameState.seerLastNightResult;
    extraContext = `\n# 预言家专属情报 (此信息仅你可见)\n- **重要信息**: 昨晚你查验了 **${
      result.targetName
    }**，Ta的身份是【${
      result.isWolf ? '狼人' : '好人'
    }】。\n- **你的任务**: 你可以选择在发言中公布这个信息（可以说真话，也可以为了迷惑狼人而说谎），或者暂时隐藏它。请根据你的人设和当前局势做出最有利的决策。\n`;
    werewolfGameState.seerLastNightResult = null;
  }

  // 3. 根据不同的行动类型，生成具体的任务描述和输出格式要求
  switch (action) {
    case 'guard_protect':
      actionPrompt = '你是守卫，请选择一名玩家进行守护。你不能连续两晚守护同一个人。';
      jsonFormat = '{"action": "vote", "targetId": "你选择守护的玩家ID"}';
      if (werewolfGameState.guardLastNightProtected)
        extraContext = `\n- 提示: 你昨晚守护了 ${
          werewolfGameState.players.find(p => p.id === werewolfGameState.guardLastNightProtected).name
        }。`;
      break;
    case 'wolf_kill':
      const wolfTeammates = werewolfGameState.players
        .filter(p => p.role === 'wolf' && p.id !== player.id)
        .map(w => w.name)
        .join('、');
      if (context.isUserWolfAlly) {
        actionPrompt = `你是狼人，你的队友是【${wolfTeammates}】和【用户】。请给你的用户队友一个击杀建议。`;
      } else {
        actionPrompt = `你是狼人，你的队友是【${wolfTeammates || '无'}】。请选择一个非狼人角色进行攻击。`;
      }
      extraContext += `\n# 狼人战术指令 (至关重要)\n- **团队合作**: 你的首要目标是和你的狼队友们【集火】同一个目标，以确保击杀成功。\n- **攻击优先级**: 请优先攻击你认为是【预言家】、【女巫】等神职的玩家，或者发言逻辑清晰、对狼人阵营威胁大的好人。`;
      jsonFormat = '{"action": "vote", "targetId": "你选择攻击的玩家ID"}';
      break;
    case 'seer_check':
      actionPrompt = '你是预言家，请选择一名玩家查验其身份（好人或狼人）。';
      jsonFormat = '{"action": "vote", "targetId": "你选择查验的玩家ID"}';
      break;
    case 'witch_action':
      actionPrompt = '你是女巫。';
      if (context.killedId) {
        actionPrompt += `今晚 ${werewolfGameState.players.find(p => p.id === context.killedId).name} 被袭击了。`;
      } else {
        actionPrompt += '今晚是平安夜。';
      }
      actionPrompt += ` 你有 ${werewolfGameState.witchPotions.save} 瓶解药和 ${werewolfGameState.witchPotions.poison} 瓶毒药。请决定你的行动。`;
      jsonFormat = '{"action": "save" | "poison" | "none", "targetId": "(如果用毒药，填写目标ID)"}';
      break;
    case 'hunter_shoot':
      actionPrompt = '你是猎人，你出局了，请选择一名玩家与你一同出局。';
      jsonFormat = '{"action": "vote", "targetId": "你选择带走的玩家ID"}';
      break;
    case 'speak':
      actionPrompt =
        '现在轮到你发言。请根据你的角色身份、人设和当前局势，发表你的看法，可以撒谎或引导。你的发言应该围绕游戏本身，而不是只和用户聊天。';
      jsonFormat = '{"action": "speak", "speech": "你的发言内容..."}';
      break;
    case 'vote':
      actionPrompt = '现在是白天投票环节，请根据大家的发言和你自己的判断，投票选出你认为是狼人的玩家。';
      jsonFormat = '{"action": "vote", "targetId": "你投票的玩家ID"}';
      break;
  }

  // 4. 构建最终发送给AI的、结构清晰的完整Prompt
  const systemPrompt = `
# 游戏背景: 狼人杀
# 你的身份和人设
- **你的名字**: ${player.name}
- **你的角色**: ${player.role}
- **你的性格人设**: ${player.persona}

# 当前局势
- **存活玩家列表**:
${alivePlayersList}
- **游戏日志 (这是完整的游戏记录，你必须通读并记住所有信息)**:
${fullGameLog}
${extraContext}

# 你的任务: ${actionPrompt}

# 输出格式: 你的回复【必须且只能】是一个严格的JSON对象，格式如下:
${jsonFormat}
`;
  // 5. 发送请求并处理返回结果 (这部分保持不变)
  try {
    const messagesForApi = [{ role: 'user', content: systemPrompt }];
    let isGemini = proxyUrl === GEMINI_API_URL;
    let geminiConfig = toGeminiRequestData(
      model,
      apiKey,
      systemPrompt,
      messagesForApi,
      isGemini,
      state.apiConfig.temperature,
    );

    const response = await fetch(
      isGemini ? geminiConfig.url : `${proxyUrl}/v1/chat/completions`,
      isGemini
        ? geminiConfig.data
        : {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${apiKey}` },
            body: JSON.stringify({
              model: model,
              messages: messagesForApi,
              temperature: parseFloat(state.apiConfig.temperature) || 0.8,
              response_format: { type: 'json_object' },
            }),
          },
    );
    if (!response.ok) throw new Error(await response.text());
    const data = await response.json();
    const content = (isGemini ? data.candidates[0].content.parts[0].text : data.choices[0].message.content).replace(
      /^```json\s*|```$/g,
      '',
    );
    const aiAction = JSON.parse(content);

    if (action === 'witch_action') return aiAction;
    if (aiAction.action === 'vote') return aiAction.targetId;
    if (aiAction.action === 'speak') return aiAction.speech;

    return null;
  } catch (error) {
    console.error(`AI (${player.name}) 行动失败:`, error);
    // 如果AI出错，提供一个保底的行动，防止游戏卡死
    if (
      action.includes('vote') ||
      action.includes('kill') ||
      action.includes('protect') ||
      action.includes('check') ||
      action.includes('shoot')
    ) {
      const potentialTargets = werewolfGameState.players.filter(p => p.isAlive && p.id !== player.id);
      if (potentialTargets.length > 0) return potentialTargets[Math.floor(Math.random() * potentialTargets.length)].id;
    }
    if (action === 'witch_action') return { action: 'none' };
    return '我...我不知道该说什么了。';
  }
}

/**
 * 一个简单的sleep函数，用于在游戏流程中制造停顿
 */
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// ▲▲▲ 狼人杀功能函数结束 ▲▲▲
// ▼▼▼ 【全新】这里是海龟汤游戏的所有核心功能函数 ▼▼▼

/**
 * 【海龟汤】总入口：打开游戏设置界面
 */
async function openSeaTurtleSoupSetup() {
  // 1. 重置游戏状态
  seaTurtleSoupState = {
    isActive: false,
    phase: 'setup',
    players: [],
    riddleProvider: null,
    riddle: '',
    answer: '',
    gameLog: [],
    currentTurnIndex: 0,
  };

  // 2. 渲染玩家选择列表
  const selectionEl = document.getElementById('sts-player-selection');
  selectionEl.innerHTML = '<p>正在加载角色列表...</p>';

  const singleChats = Object.values(state.chats).filter(chat => !chat.isGroup);
  const allNpcs = Object.values(state.chats).flatMap(chat =>
    (chat.npcLibrary || []).map(npc => ({ ...npc, owner: chat.name })),
  );

  let playerOptions = [
    ...singleChats.map(c => ({ id: c.id, name: c.name, avatar: c.settings.aiAvatar, type: '角色' })),
    ...allNpcs.map(n => ({ id: n.id, name: n.name, avatar: n.avatar, type: `NPC (${n.owner})` })),
  ];

  selectionEl.innerHTML = '';
  playerOptions.forEach(player => {
    const item = document.createElement('div');
    item.className = 'player-selection-item'; // 复用狼人杀的样式
    item.innerHTML = `
            <input type="checkbox" class="sts-player-checkbox" value="${player.id}">
            <img src="${player.avatar || defaultAvatar}" alt="${player.name}">
            <span class="name">${player.name}</span>
            <span class="type-tag">${player.type}</span>
        `;
    selectionEl.appendChild(item);
  });

  // 3. 重置并显示设置弹窗
  document.getElementById('sts-riddle-provider-select').value = 'random';
  document.getElementById('sts-user-riddle-input-area').style.display = 'none';
  document.getElementById('sts-ai-riddle-input-area').style.display = 'none';
  document.getElementById('sea-turtle-soup-setup-modal').classList.add('visible');
}

/**
 * 【海龟汤】开始游戏的核心逻辑
 */
async function startSeaTurtleSoupGame() {
  const selectedCheckboxes = document.querySelectorAll('.sts-player-checkbox:checked');
  if (selectedCheckboxes.length < 1) {
    alert('请至少邀请一位AI或NPC玩家！');
    return;
  }

  await showCustomAlert('请稍候...', '正在准备海龟汤游戏...');

  // 1. 收集玩家信息
  let players = [
    {
      id: 'user',
      name: state.qzoneSettings.nickname || '我',
      avatar: state.qzoneSettings.avatar || defaultAvatar,
      isUser: true,
      persona: '一个好奇的普通人',
    },
  ];
  selectedCheckboxes.forEach(checkbox => {
    const playerId = checkbox.value;
    const chat = Object.values(state.chats).find(c => c.id === playerId);
    if (chat) {
      // 是主要角色
      players.push({
        id: chat.id,
        name: chat.name,
        avatar: chat.settings.aiAvatar,
        persona: chat.settings.aiPersona,
        isUser: false,
      });
    } else {
      // 是NPC
      for (const c of Object.values(state.chats)) {
        const npc = (c.npcLibrary || []).find(n => n.id === playerId);
        if (npc) {
          players.push({ id: npc.id, name: npc.name, avatar: npc.avatar, persona: npc.persona, isUser: false });
          break;
        }
      }
    }
  });
  players.sort(() => Math.random() - 0.5); // 打乱座位顺序
  seaTurtleSoupState.players = players;

  // 2. 决定出题人
  const providerChoice = document.getElementById('sts-riddle-provider-select').value;
  let providerIndex = -1;

  if (providerChoice === 'user') {
    providerIndex = players.findIndex(p => p.isUser);
  } else if (providerChoice === 'random_ai') {
    const aiIndices = players.map((p, i) => (!p.isUser ? i : -1)).filter(i => i !== -1);
    providerIndex = aiIndices[Math.floor(Math.random() * aiIndices.length)];
  } else {
    // random
    providerIndex = Math.floor(Math.random() * players.length);
  }

  seaTurtleSoupState.players[providerIndex].isProvider = true;
  seaTurtleSoupState.riddleProvider = seaTurtleSoupState.players[providerIndex];

  // 3. 获取谜面和谜底
  if (seaTurtleSoupState.riddleProvider.isUser) {
    const riddle = document.getElementById('sts-user-riddle-surface').value.trim();
    const answer = document.getElementById('sts-user-riddle-answer').value.trim();
    if (!riddle || !answer) {
      alert('作为出题人，谜面和谜底都不能为空哦！');
      return;
    }
    seaTurtleSoupState.riddle = riddle;
    seaTurtleSoupState.answer = answer;
  } else {
    const riddleType = document.getElementById('sts-ai-riddle-type').value.trim();
    const { riddle, answer } = await generateSeaTurtleRiddle(seaTurtleSoupState.riddleProvider, riddleType);
    if (!riddle || !answer) {
      alert('AI出题失败，请检查API或稍后重试。');
      return;
    }
    seaTurtleSoupState.riddle = riddle;
    seaTurtleSoupState.answer = answer;
  }

  // 4. 初始化游戏
  seaTurtleSoupState.isActive = true;
  seaTurtleSoupState.phase = 'guessing';
  logToStsGame(
    `游戏开始！出题人是 ${seaTurtleSoupState.riddleProvider.name}。`,
    'system',
    seaTurtleSoupState.riddleProvider,
  );
  logToStsGame(`【谜面】\n${seaTurtleSoupState.riddle}`);

  document.getElementById('sea-turtle-soup-setup-modal').classList.remove('visible');
  showScreen('sea-turtle-soup-screen');
  renderSeaTurtleGameScreen({ activePlayerId: 'user' });

  // 游戏开始，进入第一个回合
  await processStsTurn();
}

/**
 * 【海龟汤-AI核心 | 优化版】让AI根据指定类型出题，并优先选择经典谜题
 */
async function generateSeaTurtleRiddle(provider, riddleType) {
  const { proxyUrl, apiKey, model } = state.apiConfig;
  if (!proxyUrl || !apiKey || !model) return { riddle: null, answer: null };

  // 核心修改：优化了Prompt，增加了“优先选择经典谜题”的指令
  const typePrompt = riddleType ? `请创作一个【${riddleType}】类型的` : '请创作一个';

  const systemPrompt = `
# 任务
你现在是角色“${provider.name}”，你的人设是：“${provider.persona}”。
你的任务是扮演这个角色，${typePrompt}经典的海龟汤谜题。

# 核心规则
1.  **优先经典**: 你【必须优先】从已知的、经典的、广为人知的“海龟汤”故事中挑选一个作为本次的谜题。这能确保谜题的逻辑性和可玩性。
2.  **适当原创**: 只有在想不出合适的经典谜题时，你才被允许原创一个。原创的谜题也必须逻辑严谨，情节合理。
3.  **格式铁律**: 你的回复【必须且只能】是一个严格的JSON对象，包含 "riddle" (谜面) 和 "answer" (谜底) 两个字段。
4.  **禁止出戏**: 不要说任何与出题无关的话。

# JSON输出格式示例:
{
  "riddle": "一个男人走进一家酒吧，向酒保要了一杯水。酒保却掏出了一把枪指着他。男人说了一声“谢谢”，然后离开了。为什么？",
  "answer": "这个男人在打嗝。他想通过喝水来止嗝，但酒保用更有效的方法——惊吓，帮他治好了打嗝。所以男人表示感谢后就离开了。"
}
`;
  try {
    const messagesForApi = [{ role: 'user', content: systemPrompt }];
    let isGemini = proxyUrl === GEMINI_API_URL;
    let geminiConfig = toGeminiRequestData(
      model,
      apiKey,
      systemPrompt,
      messagesForApi,
      isGemini,
      state.apiConfig.temperature,
    );

    const response = isGemini
      ? await fetch(geminiConfig.url, geminiConfig.data)
      : await fetch(`${proxyUrl}/v1/chat/completions`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${apiKey}` },
          body: JSON.stringify({
            model: model,
            messages: messagesForApi,
            temperature: parseFloat(state.apiConfig.temperature) || 0.8,
            response_format: { type: 'json_object' },
          }),
        });
    if (!response.ok) throw new Error(await response.text());
    const data = await response.json();
    const content = (isGemini ? data.candidates[0].content.parts[0].text : data.choices[0].message.content).replace(
      /^```json\s*|```$/g,
      '',
    );
    return JSON.parse(content);
  } catch (error) {
    console.error('AI出题失败:', error);
    return { riddle: null, answer: null };
  }
}

/**
 * 【海龟汤】渲染游戏主界面 (已添加当前回合玩家高亮)
 */
function renderSeaTurtleGameScreen(options = {}) {
  const playersGrid = document.getElementById('sts-players-grid');
  const logContainer = document.getElementById('sts-game-log');

  // 渲染玩家座位
  playersGrid.innerHTML = '';
  seaTurtleSoupState.players.forEach(player => {
    const seat = document.createElement('div');
    seat.className = 'player-seat';
    const roleIndicator = player.isProvider
      ? '<div class="player-role-indicator riddle-master" title="出题人">👑</div>'
      : '';
    const avatarClass = `player-avatar ${options.activePlayerId === player.id ? 'active-turn' : ''}`;

    seat.innerHTML = `
            ${roleIndicator}
            <img src="${player.avatar}" class="${avatarClass}">
            <span class="player-name">${player.name}</span>
        `;
    playersGrid.appendChild(seat);
  });

  // 渲染游戏日志
  logContainer.innerHTML = '';
  seaTurtleSoupState.gameLog.forEach(log => {
    const logEl = document.createElement('div');
    logEl.className = `sts-log-entry ${log.type}`;

    let avatarUrl = 'https://i.postimg.cc/PxZrFFFL/o-o-1.jpg';
    if (log.speakerObj && log.speakerObj.avatar) {
      avatarUrl = log.speakerObj.avatar;
    }

    switch (log.type) {
      case 'system':
        logEl.innerHTML = log.message.replace(/\n/g, '<br>');
        break;
      case 'question':
      case 'guess':
        logEl.innerHTML = `
                    <img src="${avatarUrl}" class="sts-log-avatar">
                    <div class="sts-log-content">
                        <div class="speaker">${log.speaker}</div>
                        <div>${log.message}</div>
                    </div>
                `;
        break;
      case 'answer':
        const answerClass = { 是: 'yes', 否: 'no', 无关: 'irrelevant' }[log.message] || 'irrelevant';
        logEl.innerHTML = `
                    <div class="sts-log-content">
                         <span class="answer-text ${answerClass}">${log.message}</span>
                    </div>
                    <img src="${avatarUrl}" class="sts-log-avatar">
                `;
        break;
    }
    logContainer.appendChild(logEl);
  });

  logContainer.scrollTop = logContainer.scrollHeight;
}

/**
 * 【海龟汤】添加一条游戏日志
 */
function logToStsGame(message, type = 'system', speakerObj = { name: '系统' }) {
  seaTurtleSoupState.gameLog.push({ message, type, speaker: speakerObj.name, speakerObj }); // 保存整个对象
  renderSeaTurtleGameScreen();
}

/**
 * 【海龟汤】处理用户提问
 */
async function handleStsUserQuestion() {
  if (seaTurtleSoupState.phase !== 'guessing') return;
  const input = document.getElementById('sts-question-input');
  const question = input.value.trim();
  if (!question) return;

  const userPlayer = seaTurtleSoupState.players.find(p => p.isUser);
  logToStsGame(question, 'question', userPlayer);
  input.value = '';

  // 将控制权交给游戏主循环，并告知是用户在提问
  await processStsTurn(question, userPlayer);
}

// ▼▼▼ 把这一整块全新的函数，粘贴到 handleStsUserQuestion 函数的后面 ▼▼▼

/**
 * 【海龟汤】处理用户猜测答案
 */
async function handleStsUserGuess() {
  if (seaTurtleSoupState.phase !== 'guessing') return;
  const input = document.getElementById('sts-question-input');
  const guess = input.value.trim();
  if (!guess) {
    alert('猜测的内容不能为空！');
    return;
  }

  const userPlayer = seaTurtleSoupState.players.find(p => p.isUser);
  logToStsGame(guess, 'guess', userPlayer);
  input.value = '';

  const provider = seaTurtleSoupState.riddleProvider;
  let isCorrect = false;

  if (provider.isUser) {
    isCorrect = await showCustomConfirm(
      '判断猜测',
      `玩家 ${userPlayer.name} 猜测的答案是：\n\n"${guess}"\n\n这个猜测是否正确？`,
    );
  } else {
    const aiEvaluation = await triggerStsAiTurn(provider, 'evaluate_guess', guess);
    isCorrect = aiEvaluation.isCorrect;
  }

  if (isCorrect) {
    logToStsGame(`${userPlayer.name} 猜对了！游戏结束！`, 'system', userPlayer);
    await revealStsAnswer();
  } else {
    logToStsGame('不对哦。', 'answer', provider);
    await processStsTurn();
  }
}

/**
 * 【海龟汤】游戏主循环/引擎
 */
async function processStsTurn(userQuestion = null, userObj = null) {
  if (!seaTurtleSoupState.isActive || seaTurtleSoupState.phase !== 'guessing') return;

  // 1. 如果有用户提问，出题人先回答
  if (userQuestion && userObj) {
    const provider = seaTurtleSoupState.riddleProvider;
    let providerAnswerResponse;
    if (provider.isUser) {
      const choice = await showChoiceModal(`回答 ${userObj.name} 的问题: "${userQuestion}"`, [
        { text: '是', value: '是' },
        { text: '否', value: '否' },
        { text: '无关', value: '无关' },
      ]);
      providerAnswerResponse = { judgement: choice || '无关', remark: '' };
    } else {
      providerAnswerResponse = await triggerStsAiTurn(provider, 'answer', {
        question: userQuestion,
        askerName: userObj.name,
      });
    }

    logToStsGame(providerAnswerResponse.judgement, 'answer', provider);
    if (providerAnswerResponse.remark) {
      await sleep(500);
      logToStsGame(providerAnswerResponse.remark, 'question', provider);
    }
  }

  // 2. 轮到AI玩家行动 (提问或猜测)
  const guessers = seaTurtleSoupState.players.filter(p => !p.isProvider);
  if (guessers.length === 0) return;

  for (const guesser of guessers) {
    if (guesser.isUser) continue;

    await sleep(2000 + Math.random() * 2000);

    renderSeaTurtleGameScreen({ activePlayerId: guesser.id });
    const aiAction = await triggerStsAiTurn(guesser, 'guess');

    if (aiAction.type === 'question') {
      logToStsGame(aiAction.content, 'question', guesser);
      await sleep(6000);

      const provider = seaTurtleSoupState.riddleProvider;
      let providerAnswerResponse;
      if (provider.isUser) {
        const choice = await showChoiceModal(`回答 ${guesser.name} 的问题: "${aiAction.content}"`, [
          { text: '是', value: '是' },
          { text: '否', value: '否' },
          { text: '无关', value: '无关' },
        ]);
        providerAnswerResponse = { judgement: choice || '无关', remark: '' };
      } else {
        providerAnswerResponse = await triggerStsAiTurn(provider, 'answer', {
          question: aiAction.content,
          askerName: guesser.name,
        });
      }

      logToStsGame(providerAnswerResponse.judgement, 'answer', provider);
      if (providerAnswerResponse.remark) {
        await sleep(500);
        logToStsGame(providerAnswerResponse.remark, 'question', provider);
      }
    } else if (aiAction.type === 'guess') {
      logToStsGame(aiAction.content, 'guess', guesser);

      let isCorrect = false;
      if (seaTurtleSoupState.riddleProvider.isUser) {
        isCorrect = await showCustomConfirm(
          '判断猜测',
          `玩家 ${guesser.name} 猜测的答案是：\n\n"${aiAction.content}"\n\n这个猜测是否正确？`,
        );
      } else {
        const aiEvaluation = await triggerStsAiTurn(
          seaTurtleSoupState.riddleProvider,
          'evaluate_guess',
          aiAction.content,
        );
        isCorrect = aiEvaluation.isCorrect;
      }

      if (isCorrect) {
        logToStsGame(`${guesser.name} 猜对了！游戏结束！`, 'system', guesser);
        await revealStsAnswer();
        return;
      } else {
        logToStsGame('不对哦。', 'answer', seaTurtleSoupState.riddleProvider);
      }
    }
  }

  renderSeaTurtleGameScreen({ activePlayerId: 'user' });
}

/**
 * 【海龟汤-AI核心 V2】触发AI行动（回答、提问、判断或猜测）
 */
async function triggerStsAiTurn(player, actionType, contextPayload = {}) {
  const { proxyUrl, apiKey, model } = state.apiConfig;
  if (!proxyUrl || !apiKey || !model) return { type: 'question', content: '我不知道该问什么了。' };

  let systemPrompt = '';
  const gameLogText = seaTurtleSoupState.gameLog
    .map(log => `${log.speaker}: ${log.message}`)
    .slice(-15)
    .join('\n');

  if (actionType === 'answer') {
    // 人设加强版 V3 Prompt
    systemPrompt = `
# 任务: 海龟汤出题人 (高级人格版)
你现在【就是】角色“${player.name}”，你的人设是：“${player.persona}”。
你是海龟汤的出题人，你的谜底是：“${seaTurtleSoupState.answer}”。
现在，玩家“${contextPayload.askerName}”向你提问：“${contextPayload.question}”。

你的任务是先给出判断，然后用【完全符合你人设的口吻】，给出一句精妙的补充说明(remark)。

# 你的行为准则 (必须严格遵守)

## 1. 关于判断 (Judgement)
你的 "judgement" 字段必须从以下【四个】选项中选择一个：\`是\`, \`否\`, \`无关\`, \`部分是\`。

## 2. 关于补充说明 (Remark)
-   **【【【人格铁律】】】**: 你的每一句补充说明，都【必须】是你作为角色“${player.name}”会说的话。思考一下，一个“${player.persona}”性格的人，在面对这个问题时会如何回答？是会调侃、会鼓励、会故作高深，还是会不耐烦？
-   **配合判断**: 当判断为 "部分是" 时，你的补充说明要巧妙地指出他们猜对的部分。
-   **给予提示 (仅在玩家卡关时)**:
    -   **判断瓶颈**: 当你观察到最近的5-8条提问大多是“无关”时，意味着玩家可能陷入了思维僵局。
    -   **执行操作**: 在这种情况下，你的补充说明【必须包含一个方向性的提示】，并用你的人设口吻自然地说出来。

# 格式铁律
1.  你的回复【必须且只能】是一个严格的JSON对象，包含 "judgement" 和 "remark" 两个字段。
2.  【绝对禁止】在你的任何回复中使用Emoji表情符号或出戏的词语。

# JSON输出格式示例:
{
  "judgement": "",
  "remark": ""
}
现在，请直接输出你的JSON判断。`;
  } else if (actionType === 'evaluate_guess') {
    systemPrompt = `
# 任务: 海龟汤出题人 - 判断猜测
你正在扮演角色“${player.name}”，人设是：“${player.persona}”。
你是海龟汤的出题人。你的谜底是：“${seaTurtleSoupState.answer}”。
现在，有玩家直接猜测了谜底，内容是：“${contextPayload}”。
你的任务是判断这个猜测是否与你的谜底【核心意思一致】，只要70%的正确率即可。

# 核心规则
1.  **格式铁律**: 你的回复【必须且只能】是一个严格的JSON对象，格式为: \`{"isCorrect": true}\` 或 \`{"isCorrect": false}\`。
2.  **判断标准**: 只要猜测的核心情节、人物关系、关键道具和最终结果与谜底一致即可，不需要逐字匹配。

现在，请直接输出你的判断。`;
  } else {
    // 'guess'
    systemPrompt = `
# 任务: 海龟汤猜测者
你正在扮演角色“${player.name}”，人设是：“${player.persona}”。
你正在玩海龟汤游戏，需要根据已知信息提问或猜测谜底。

# 游戏信息
- 谜面: ${seaTurtleSoupState.riddle}
- 已有线索 (完整的对话记录):
${gameLogText}

# 核心规则
1.  **【【【逻辑推理铁律】】】**: 你【必须】仔细分析上方的“已有线索”，避免提出重复或与已知线索矛盾的问题。你的提问或猜测应该建立在已有信息之上，展现出逻辑推理能力。
2.  **【【【人格扮演铁律】】】**: 你的提问和猜测都【必须】符合你的人设和口吻，就像真人在玩游戏一样。你可以适当加入一些自己的思考过程或情绪表达，让对话更生动。例如，你可以说：“让我想想... 既然和地点无关，那是不是和时间有关？”，尽可能发言字数多点。
3.  **决策**: 根据线索，决定是提出一个关键的“是/否”问题来缩小范围，还是直接猜测谜底。当线索足够时，大胆地使用 "guess" 指令来猜测完整的故事。
4.  **【【【加速规则】】】**: 如果“已有线索”的对话记录已经超过了30条，这说明游戏时间过长。在这种情况下，你【应该更倾向于直接猜测谜底】，而不是继续提出细节问题。
5.  **格式铁律**: 你的回复【必须且只能】是一个严格的JSON对象。
   - 如果提问, 格式: \`{"type": "question", "content": "你的问题..."}\`
   - 如果猜测, 格式: \`{"type": "guess", "content": "你猜测的完整故事..."}\`
6.  **禁止Emoji**: 【绝对禁止】在你的任何回复中使用Emoji表情符号。

现在，请根据你的人设和判断，生成你的行动。`;
  }
  const maxRetries = 3; // 最多重试3次
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      const messagesForApi = [{ role: 'user', content: '请根据你在系统指令中读到的规则，立即开始你的行动。' }];
      let isGemini = proxyUrl === GEMINI_API_URL;
      let geminiConfig = toGeminiRequestData(
        model,
        apiKey,
        systemPrompt,
        messagesForApi,
        isGemini,
        state.apiConfig.temperature,
      );

      const response = isGemini
        ? await fetch(geminiConfig.url, geminiConfig.data)
        : await fetch(`${proxyUrl}/v1/chat/completions`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${apiKey}` },
            body: JSON.stringify({
              model: model,
              messages: [{ role: 'system', content: systemPrompt }, ...messagesForApi],
              temperature: parseFloat(state.apiConfig.temperature) || 0.8,
              response_format: { type: 'json_object' },
            }),
          });

      // 【重要】如果响应状态码是429，也主动抛出错误，进入catch块进行重试
      if (response.status === 429) {
        const errorData = await response.json();
        // 构造一个和之前日志里一样的错误信息，方便我们解析
        throw new Error(JSON.stringify({ error: errorData.error }));
      }
      if (!response.ok) {
        // 对于其他错误，直接抛出
        throw new Error(`API请求失败: ${response.status} - ${await response.text()}`);
      }

      const data = await response.json();
      const content = (isGemini ? data.candidates[0].content.parts[0].text : data.choices[0].message.content).replace(
        /^```json\s*|```$/g,
        '',
      );

      // 如果成功，解析并返回结果，结束函数
      return JSON.parse(content);
    } catch (error) {
      console.error(`海龟汤AI行动失败 (第 ${attempt} 次尝试):`, error.message);

      // 如果是最后一次尝试，就彻底失败，并把错误抛出去
      if (attempt === maxRetries) {
        // 将原始错误重新包装后抛出，以便外部能捕获
        throw new Error(`AI action failed after ${maxRetries} attempts: ${error.message}`);
      }

      let delay = 2000 * attempt; // 默认的指数退避延迟

      // 智能解析API建议的等待时间
      try {
        // 错误信息本身可能是一个JSON字符串，先解析它
        const errorJson = JSON.parse(error.message);
        const errorMessage = errorJson.error.message;

        // 正则表达式匹配 "retry in X.XXXXs"
        const retryMatch = errorMessage.match(/retry in (\d+\.?\d*)s/);
        if (retryMatch && retryMatch[1]) {
          // 找到了建议时间，就用它，并额外加一点点缓冲
          delay = parseFloat(retryMatch[1]) * 1000 + 500;
          console.log(`API请求过于频繁，将根据建议在 ${Math.round(delay / 1000)} 秒后重试...`);
        }
      } catch (e) {
        // 如果解析失败，说明错误信息格式不符合预期，就使用默认延迟
        console.log(`API请求失败，将在 ${Math.round(delay / 1000)} 秒后进行第 ${attempt + 1} 次重试...`);
      }

      // 等待计算出的延迟时间
      await sleep(delay);
    }
  }
  // ==========================================================
  // --- ▲▲▲ 【核心修改】到这里结束 ▲▲▲ ---
  // ==========================================================

  // 如果循环结束都没成功，返回一个备用结果，防止游戏卡死
  console.error('所有重试均失败，返回备用行动。');
  if (actionType === 'answer') return { judgement: '无关', remark: '（AI思考短路了...）' };
  if (actionType === 'evaluate_guess') return { isCorrect: false };
  return { type: 'question', content: '他/她是人类吗？' };
}
/**
 * 【海龟汤 V2 - 结算增强版】揭晓答案并显示结算界面
 */
async function revealStsAnswer() {
  if (!seaTurtleSoupState.isActive) return;

  // 1. 标记游戏结束
  seaTurtleSoupState.isActive = false; // 确保游戏状态变为非激活
  seaTurtleSoupState.phase = 'reveal';

  // 2. 隐藏游戏中的操作区域
  document.getElementById('sts-action-area').style.visibility = 'hidden';

  // 3. 准备复盘内容
  const summaryText = generateStsSummary();

  // 4. 显示结算弹窗
  showStsSummaryModal(summaryText);
}
// ▼▼▼ 【全新】海龟汤结算与分享功能函数 ▼▼▼

/**
 * 生成海龟汤的复盘文本
 * @returns {string} 格式化后的复盘Markdown文本
 */
function generateStsSummary() {
  let summaryText = `**海龟汤 - 游戏复盘**\n\n`;
  summaryText += `**出题人:** ${seaTurtleSoupState.riddleProvider.name}\n\n`;
  summaryText += `**谜面:**\n${seaTurtleSoupState.riddle}\n\n`;
  summaryText += `**谜底:**\n${seaTurtleSoupState.answer}`;
  return summaryText;
}

/**
 * 显示游戏结算卡片模态框
 * @param {string} summaryText - 复盘文本
 */
function showStsSummaryModal(summaryText) {
  const modal = document.getElementById('sts-summary-modal');
  const contentEl = document.getElementById('sts-summary-content');

  // 使用你已有的Markdown渲染函数，让复盘更好看
  contentEl.innerHTML = renderMarkdown(summaryText);

  // 为按钮绑定事件 (使用克隆节点防止重复绑定)
  const shareBtn = document.getElementById('share-sts-summary-btn');
  const newShareBtn = shareBtn.cloneNode(true);
  shareBtn.parentNode.replaceChild(newShareBtn, shareBtn);
  newShareBtn.onclick = () => openStsShareTargetPicker(summaryText);

  const backBtn = document.getElementById('back-to-hall-from-sts-btn');
  const newBackBtn = backBtn.cloneNode(true);
  backBtn.parentNode.replaceChild(newBackBtn, backBtn);
  newBackBtn.onclick = () => {
    modal.classList.remove('visible');
    showScreen('game-hall-screen');
  };

  modal.classList.add('visible');
}

/**
 * 打开复盘分享目标选择器
 * @param {string} summaryText - 要分享的复盘文本
 */
function openStsShareTargetPicker(summaryText) {
  const modal = document.getElementById('sts-share-target-modal');
  const listEl = document.getElementById('sts-share-target-list');
  listEl.innerHTML = '';

  // 从游戏状态中获取所有非出题人的AI玩家
  const aiPlayers = seaTurtleSoupState.players.filter(p => !p.isUser && !p.isProvider);

  if (aiPlayers.length === 0) {
    alert('没有可以分享的AI玩家。');
    return;
  }

  // 渲染可选的AI玩家列表
  aiPlayers.forEach(player => {
    const item = document.createElement('div');
    item.className = 'player-selection-item'; // 复用样式
    item.innerHTML = `
            <input type="checkbox" class="sts-target-checkbox" value="${player.id}" checked>
            <img src="${player.avatar || defaultAvatar}" alt="${player.name}">
            <span class="name">${player.name}</span>
        `;
    listEl.appendChild(item);
  });

  // 绑定按钮事件
  const confirmBtn = document.getElementById('sts-confirm-share-btn');
  const newConfirmBtn = confirmBtn.cloneNode(true);
  confirmBtn.parentNode.replaceChild(newConfirmBtn, confirmBtn);
  newConfirmBtn.onclick = () => {
    const selectedIds = Array.from(document.querySelectorAll('.sts-target-checkbox:checked')).map(cb => cb.value);
    if (selectedIds.length > 0) {
      sendStsSummaryToSelectedPlayers(summaryText, selectedIds);
    } else {
      alert('请至少选择一个分享对象！');
    }
  };

  document.getElementById('sts-cancel-share-btn').onclick = () => modal.classList.remove('visible');
  document.getElementById('sts-select-all-btn').onclick = () => {
    document.querySelectorAll('.sts-target-checkbox').forEach(cb => (cb.checked = true));
  };
  document.getElementById('sts-deselect-all-btn').onclick = () => {
    document.querySelectorAll('.sts-target-checkbox').forEach(cb => (cb.checked = false));
  };

  modal.classList.add('visible');
}

/**
 * 将游戏复盘发送到【选定】的AI角色的聊天中
 * @param {string} summaryText - 复盘文本
 * @param {string[]} targetIds - 目标AI角色的ID数组
 */
async function sendStsSummaryToSelectedPlayers(summaryText, targetIds) {
  // 关闭所有可能打开的弹窗
  document.getElementById('sts-summary-modal').classList.remove('visible');
  document.getElementById('sts-share-target-modal').classList.remove('visible');

  let sentCount = 0;
  const aiContext = `[系统指令：刚刚结束了一局海龟汤，这是游戏复盘。请根据这个复盘内容，以你的角色人设，和用户聊聊刚才的游戏。]\n\n${summaryText}`;

  for (const chatId of targetIds) {
    const chat = state.chats[chatId];
    if (chat) {
      // 创建对用户可见的复盘卡片消息
      const visibleMessage = {
        role: 'user',
        type: 'text',
        timestamp: Date.now(),
        content: summaryText,
      };

      // 创建对AI可见的隐藏指令
      const hiddenInstruction = {
        role: 'system',
        content: aiContext,
        timestamp: Date.now() + 1,
        isHidden: true,
      };

      chat.history.push(visibleMessage, hiddenInstruction);
      await db.chats.put(chat);
      sentCount++;
    }
  }

  await showCustomAlert('分享成功', `游戏复盘已分享至 ${sentCount} 位AI玩家的聊天中！`);
  showScreen('game-hall-screen');
}

// ▲▲▲ 新增函数结束 ▲▲▲
/**
 * 【辅助函数】计算两个字符串的简单相似度
 */
function simpleSimilarity(str1, str2) {
  const set1 = new Set(str1.split(''));
  const set2 = new Set(str2.split(''));
  const intersection = new Set([...set1].filter(x => set2.has(x)));
  return intersection.size / Math.max(set1.size, set2.size);
}

// ▲▲▲ 海龟汤功能函数结束 ▲▲▲
// ▼▼▼ 【全新】这里是剧本杀游戏的所有核心功能函数 ▼▼▼

/**
 * 【剧本杀】打开游戏设置界面
 */
async function openScriptKillSetup() {
  showScreen('script-kill-setup-screen');

  const scriptSelect = document.getElementById('script-kill-script-select');
  scriptSelect.innerHTML = '<option value="">-- 请选择剧本 --</option>';

  // --- ▼▼▼ 核心修改在这里 ▼▼▼ ---

  // 1. 遍历我们创建的内置剧本库
  BUILT_IN_SCRIPTS.forEach(script => {
    const option = document.createElement('option');
    option.value = script.id; // value 是剧本的唯一ID
    option.textContent = `【内置】${script.name}`; // 显示的文本
    scriptSelect.appendChild(option);
  });

  // 2. 加载并显示自定义剧本
  const customScripts = await db.scriptKillScripts.toArray();
  customScripts.forEach(script => {
    const option = document.createElement('option');
    option.value = script.id;
    option.textContent = `【自定义】${script.name}`;
    scriptSelect.appendChild(option);
  });

  // --- ▲▲▲ 修改结束 ▲▲▲ ---
  // 渲染玩家选择列表
  const selectionEl = document.getElementById('script-kill-player-selection');
  selectionEl.innerHTML = '<p>正在加载角色列表...</p>';

  const singleChats = Object.values(state.chats).filter(chat => !chat.isGroup);
  const allNpcs = Object.values(state.chats).flatMap(chat =>
    (chat.npcLibrary || []).map(npc => ({ ...npc, owner: chat.name })),
  );

  let playerOptions = [
    ...singleChats.map(c => ({ id: c.id, name: c.name, avatar: c.settings.aiAvatar, type: '角色' })),
    ...allNpcs.map(n => ({ id: n.id, name: n.name, avatar: n.avatar, type: `NPC (${n.owner})` })),
  ];

  selectionEl.innerHTML = '';
  playerOptions.forEach(player => {
    const item = document.createElement('div');
    item.className = 'player-selection-item'; // 复用样式
    item.innerHTML = `
            <input type="checkbox" class="script-kill-player-checkbox" value="${player.id}">
            <img src="${player.avatar || defaultAvatar}" alt="${player.name}">
            <span class="name">${player.name}</span>
            <span class="type-tag">${player.type}</span>
        `;
    selectionEl.appendChild(item);
  });
}
// ▼▼▼ 在这里开始粘贴 ▼▼▼

/**
 * 【剧本杀】显示角色选择弹窗，让用户选择角色
 * @param {string} title - 弹窗标题
 * @param {Array<object>} options - 角色选项数组 [{text, value}]
 * @returns {Promise<number|null>} - 返回用户选择的角色的索引，如果取消则返回null
 */
async function showRoleSelectionModal(title, options) {
  return new Promise(resolve => {
    const modal = document.getElementById('custom-modal-overlay');
    const modalTitle = document.getElementById('custom-modal-title');
    const modalBody = document.getElementById('custom-modal-body');
    const modalConfirmBtn = document.getElementById('custom-modal-confirm');
    const modalCancelBtn = document.getElementById('custom-modal-cancel');

    modalTitle.textContent = title;

    let optionsHtml = '<div style="text-align: left; max-height: 400px; overflow-y: auto;">';
    options.forEach((option, index) => {
      optionsHtml += `
                <label style="display: block; padding: 10px; border-bottom: 1px solid #eee; cursor: pointer;">
                    <input type="radio" name="role_selection" value="${option.value}" ${index === 0 ? 'checked' : ''}>
                    ${option.text}
                </label>
            `;
    });
    optionsHtml += '</div>';

    modalBody.innerHTML = optionsHtml;
    modalConfirmBtn.textContent = '确认选择';
    modalCancelBtn.style.display = 'block';

    modal.classList.add('visible');

    modalConfirmBtn.onclick = () => {
      const selectedRadio = document.querySelector('input[name="role_selection"]:checked');
      if (selectedRadio) {
        modal.classList.remove('visible');
        resolve(parseInt(selectedRadio.value));
      } else {
        alert('请选择一个角色！');
      }
    };

    modalCancelBtn.onclick = () => {
      modal.classList.remove('visible');
      resolve(null);
    };
  });
}

/**
 * 【剧本杀】开始游戏的核心逻辑 (V3 - 玩家自选，AI随机版)
 */
async function startScriptKillGame() {
  const scriptId = document.getElementById('script-kill-script-select').value;
  if (!scriptId) {
    alert('请先选择一个剧本！');
    return;
  }
  // ▼▼▼ 用这块【已修复】的代码替换旧的 if/else 逻辑 ▼▼▼
  let script;
  // 【核心修改】我们不再只检查 'built_in_1'，而是检查 scriptId 是否以 'built_in_' 开头
  if (scriptId.startsWith('built_in_')) {
    // 如果是，就调用 getBuiltInScript 函数，并将正确的ID传进去
    script = getBuiltInScript(scriptId);
  } else {
    // 否则，说明是自定义剧本，才去数据库里查找
    script = await db.scriptKillScripts.get(parseInt(scriptId));
  }
  // ▲▲▲ 替换结束 ▲▲▲
  if (!script) {
    alert('加载剧本失败！');
    return;
  }

  const selectedCheckboxes = document.querySelectorAll('.script-kill-player-checkbox:checked');
  const requiredPlayers = script.roles.length - 1;
  if (selectedCheckboxes.length !== requiredPlayers) {
    alert(`此剧本需要您邀请 ${requiredPlayers} 位AI或NPC玩家！`);
    return;
  }

  await showCustomAlert('请稍候...', '正在分配角色，请耐心等待...');

  // 1. 初始化游戏状态
  scriptKillGameState = {
    isActive: true,
    script: script,
    players: [],
    gamePhase: 'start',
    turnIndex: 0,
    gameLog: [],
    evidenceCounts: {},
    votes: {},
    isFreeChoice: document.getElementById('script-kill-free-choice-toggle').checked,
    discussionRound: 1, // <--- ★★★ 在这里添加这一行 ★★★
    collectedClueIds: new Set(),
  };
  // 2. 收集玩家信息 (这部分不变)
  let invitedPlayers = [];
  selectedCheckboxes.forEach(checkbox => {
    const playerId = checkbox.value;
    const chat = Object.values(state.chats).find(c => c.id === playerId);
    if (chat) {
      invitedPlayers.push({
        id: chat.id,
        name: chat.name,
        avatar: chat.settings.aiAvatar,
        persona: chat.settings.aiPersona,
        isUser: false,
      });
    } else {
      for (const c of Object.values(state.chats)) {
        const npc = (c.npcLibrary || []).find(n => n.id === playerId);
        if (npc) {
          invitedPlayers.push({ id: npc.id, name: npc.name, avatar: npc.avatar, persona: npc.persona, isUser: false });
          break;
        }
      }
    }
  });
  const userPlayer = {
    id: 'user',
    name: state.qzoneSettings.nickname || '我',
    avatar: state.qzoneSettings.avatar || defaultAvatar,
    isUser: true,
    persona: '一个喜欢探案的普通人',
  };

  // --- 3. 【核心改造】根据开关状态，执行不同的分配逻辑 ---
  const assignedRoles = new Map(); // 使用Map存储 {playerId -> roleObject}
  let remainingRoles = [...script.roles]; // 创建一个可修改的角色列表副本

  if (scriptKillGameState.isFreeChoice) {
    // --- 自由选择模式 (玩家自选，AI随机) ---

    // 3a. 用户先从所有角色中选择一个
    const roleOptions = remainingRoles.map((role, index) => ({
      text: `【${role.name}】: ${role.description.substring(0, 40)}...`,
      value: index,
    }));
    const userChoiceIndex = await showRoleSelectionModal('请选择你的角色', roleOptions);
    if (userChoiceIndex === null) {
      hideCustomModal();
      alert('你取消了角色选择，游戏未开始。');
      return;
    }
    // 从角色池中移除用户选择的角色，并分配给用户
    const userChosenRole = remainingRoles.splice(userChoiceIndex, 1)[0];
    assignedRoles.set(userPlayer.id, userChosenRole);

    // 3b. 【【【这就是本次的核心修改！】】】
    // 将剩余的角色【随机打乱】
    remainingRoles.sort(() => Math.random() - 0.5);
    // 然后【按顺序】分配给AI们
    invitedPlayers.forEach((aiPlayer, index) => {
      assignedRoles.set(aiPlayer.id, remainingRoles[index]);
    });
  } else {
    // --- 随机分配模式 (旧逻辑保持不变) ---
    const allGamePlayers = [userPlayer, ...invitedPlayers];
    allGamePlayers.sort(() => Math.random() - 0.5);
    const shuffledRoles = [...script.roles].sort(() => Math.random() - 0.5);
    allGamePlayers.forEach((player, index) => {
      assignedRoles.set(player.id, shuffledRoles[index]);
    });
  }

  // 4. 组合最终的玩家列表 (这部分不变)
  const allPlayersWithRoles = [userPlayer, ...invitedPlayers].map(player => ({
    ...player,
    role: assignedRoles.get(player.id),
    evidence: [],
  }));
  scriptKillGameState.players = allPlayersWithRoles;

  // 5. 显示身份给用户 (这部分不变)
  const myPlayer = scriptKillGameState.players.find(p => p.isUser);
  hideCustomModal();
  await showCustomAlert(
    `你的角色是：【${myPlayer.role.name}】`,
    `**角色介绍:**\n${myPlayer.role.description}\n\n**你的任务:**\n${myPlayer.role.tasks}`,
  );

  // 6. 切换到游戏界面并开始 (这部分不变)
  showScreen('script-kill-game-screen');
  await processScriptKillTurn();
}

// ▲▲▲ 替换结束 ▲▲▲

// ▼▼▼ 【最终流程版】请用这整块代码，完整替换旧的 processScriptKillTurn 函数 ▼▼▼
/**
 * 【剧本杀 V4 - 最终流程引擎】游戏主循环/引擎
 */
async function processScriptKillTurn() {
  if (!scriptKillGameState.isActive) return;
  renderScriptKillGameScreen();

  switch (scriptKillGameState.gamePhase) {
    case 'start':
      logToScriptKillGame(`游戏开始！剧本：【${scriptKillGameState.script.name}】`, 'system');
      await sleep(1000);
      logToScriptKillGame(`【故事背景】\n${scriptKillGameState.script.storyBackground}`, 'system');
      await sleep(3000);
      logToScriptKillGame('请各位玩家查看自己的角色信息，准备进行自我介绍。', 'system');
      scriptKillGameState.gamePhase = 'introduction';
      await sleep(2000);
      await processScriptKillTurn();
      break;

    case 'introduction':
      logToScriptKillGame('现在开始轮流进行自我介绍。', 'system');
      for (const player of scriptKillGameState.players) {
        renderScriptKillGameScreen({ speakingPlayerId: player.id });
        let introduction = player.isUser
          ? await waitForUserActionSK('轮到你自我介绍了', 'speak', '简单介绍一下你自己和你所扮演的角色...')
          : await triggerScriptKillAiAction(player.id, 'introduce');
        logToScriptKillGame({ player: player, speech: introduction }, 'speech');
        await sleep(1000);
      }
      renderScriptKillGameScreen();
      logToScriptKillGame('自我介绍结束，现在请各位玩家分享自己的时间线。', 'system');
      scriptKillGameState.gamePhase = 'timeline_discussion';
      await sleep(2000);
      await processScriptKillTurn();
      break;

    case 'timeline_discussion':
      logToScriptKillGame('请各位玩家轮流发言，梳理并公开自己的时间线。', 'system');
      await sleep(1500);
      for (const player of scriptKillGameState.players) {
        renderScriptKillGameScreen({ speakingPlayerId: player.id });
        let timelineSpeech = player.isUser
          ? await waitForUserActionSK('轮到你陈述时间线了', 'speak', '请根据你的剧本，详细说明你的行动轨迹...')
          : await triggerScriptKillAiAction(player.id, 'discuss_timeline');
        logToScriptKillGame({ player: player, speech: timelineSpeech }, 'speech');
        await sleep(1000);
      }
      renderScriptKillGameScreen();
      logToScriptKillGame('时间线陈述结束，现在进入【第一轮搜证环节】。', 'system');
      scriptKillGameState.gamePhase = 'evidence_round_1';
      await processScriptKillTurn();
      break;

    case 'evidence_round_1':
      updateActionAreaSK();
      logToScriptKillGame('进入第一轮搜证，每位玩家有【2次】搜证机会。', 'system');
      await sleep(2000);

      // 【核心修改】AI 进行第一轮的第1次搜证
      for (const player of scriptKillGameState.players) {
        if (player.isUser) continue;
        logToScriptKillGame(`轮到 ${player.role.name} (${player.name}) 进行第1次搜证...`);
        await sleep(2000);
        await handleAiSearch(player);
      }
      // 【核心修改】AI 进行第一轮的第2次搜证
      for (const player of scriptKillGameState.players) {
        if (player.isUser) continue;
        logToScriptKillGame(`轮到 ${player.role.name} (${player.name}) 进行第2次搜证...`);
        await sleep(2000);
        await handleAiSearch(player);
      }
      logToScriptKillGame('所有AI搜证完毕，玩家可以继续搜证或结束本环节进入讨论。', 'system');
      break;

    case 'discussion_round_1':
      logToScriptKillGame('第一轮搜证结束，现在进入【第一轮讨论环节】。', 'system');
      updateActionAreaSK();
      break;

    case 'evidence_round_2':
      updateActionAreaSK();
      logToScriptKillGame('第一轮讨论结束，现在进入【第二轮搜证环节】。', 'system');
      logToScriptKillGame('根据刚才的讨论，各位玩家现在还有【1次】搜证机会。', 'system');
      await sleep(2000);

      // 【核心修改】AI 进行第二轮的唯一次搜证
      for (const player of scriptKillGameState.players) {
        if (player.isUser) continue;
        const searchCount = scriptKillGameState.evidenceCounts[player.id] || 0;
        if (searchCount < 3) {
          // 确保AI也有次数限制
          logToScriptKillGame(`轮到 ${player.role.name} (${player.name}) 进行补充搜证...`);
          await sleep(2000);
          await handleAiSearch(player);
        }
      }
      logToScriptKillGame('所有AI补充搜证完毕，玩家可以继续搜证或结束本环节进入最终讨论。', 'system');
      break;

    // 【全新阶段】第二轮讨论
    case 'discussion_round_2':
      logToScriptKillGame('第二轮搜证结束，现在进入【第二轮讨论环节】。', 'system');
      updateActionAreaSK(); // 显示发言按钮
      break;

    // 【全新阶段】第三轮（最终）讨论
    case 'discussion_round_3':
      logToScriptKillGame('第二轮讨论结束，现在进入【最终讨论环节】。', 'system');
      updateActionAreaSK(); // 再次显示发言按钮
      break;

    case 'voting':
      // 投票和结束逻辑保持不变
      logToScriptKillGame('最终讨论结束，现在进入投票环节。请投票指认凶手！', 'system');
      const detailedVotes = {};
      const alivePlayers = scriptKillGameState.players;
      for (const voter of alivePlayers) {
        let targetId = voter.isUser
          ? await waitForUserActionSK('请投票指认凶手', 'vote')
          : await triggerScriptKillAiAction(voter.id, 'vote');
        detailedVotes[voter.id] = targetId;
        if (targetId) {
          const targetPlayer = scriptKillGameState.players.find(p => p.id === targetId);
          logToScriptKillGame(`${voter.name} 投票给了 ${targetPlayer.name}。`);
        } else {
          logToScriptKillGame(`${voter.name} 弃票了。`);
        }
      }
      scriptKillGameState.votes = detailedVotes;
      scriptKillGameState.gamePhase = 'end';
      await sleep(2000);
      await processScriptKillTurn();
      break;

    case 'end':
      // 结束逻辑保持不变
      logToScriptKillGame('投票结束，正在公布真相...', 'system');
      await sleep(2000);
      const voteCounts = {};
      for (const voterId in scriptKillGameState.votes) {
        const targetId = scriptKillGameState.votes[voterId];
        if (targetId) {
          voteCounts[targetId] = (voteCounts[targetId] || 0) + 1;
        }
      }
      let maxVotes = 0,
        votedPlayerIds = [];
      for (const playerId in voteCounts) {
        if (voteCounts[playerId] > maxVotes) {
          maxVotes = voteCounts[playerId];
          votedPlayerIds = [playerId];
        } else if (voteCounts[playerId] === maxVotes) {
          votedPlayerIds.push(playerId);
        }
      }
      const killer = scriptKillGameState.players.find(p => p.role.isKiller);
      let winner = '',
        resultText = '';
      if (votedPlayerIds.length === 1 && votedPlayerIds[0] === killer.id) {
        winner = '好人阵营';
        resultText = `恭喜！你们成功指认出凶手【${killer.role.name} (${killer.name})】！好人阵营胜利！`;
      } else {
        winner = '凶手阵营';
        resultText = `很遗憾，真正的凶手是【${killer.role.name} (${killer.name})】！凶手阵营胜利！`;
      }
      logToScriptKillGame(resultText, 'system');
      await sleep(3000);
      logToScriptKillGame(`【真相】\n${scriptKillGameState.script.truth}`, 'system');
      await showCustomAlert('请稍候...', 'AI正在生成本局复盘摘要...');
      const aiSummary = await generateAiSkSummary();
      const summary = generateSkSummary(winner, aiSummary);
      showScriptKillSummaryModal(summary);
      scriptKillGameState.isActive = false;
      updateActionAreaSK();
      break;
  }
}
// ▲▲▲ 替换结束 ▲▲▲

/**
 * 【剧本杀】渲染游戏主界面
 */
function renderScriptKillGameScreen(options = {}) {
  // 这部分和狼人杀的渲染函数非常相似，我们直接复用
  const playersGrid = document.getElementById('script-kill-players-grid');
  const logContainer = document.getElementById('script-kill-game-log');

  playersGrid.innerHTML = '';
  scriptKillGameState.players.forEach(player => {
    const seat = document.createElement('div');
    seat.className = 'player-seat';
    const avatarClass = `player-avatar ${options.speakingPlayerId === player.id ? 'speaking' : ''}`;

    seat.innerHTML = `
            <img src="${player.avatar}" class="${avatarClass}">
            <span class="player-name">${player.role.name}</span>
        `;
    playersGrid.appendChild(seat);
  });

  logContainer.innerHTML = '';
  scriptKillGameState.gameLog.forEach(log => {
    const logEl = document.createElement('div');
    if (log.type === 'speech') {
      logEl.className = 'log-entry speech';
      const { player, speech } = log.message;
      logEl.innerHTML = `
                <img src="${player.avatar}" class="speech-avatar">
                <div class="speech-content">
                    <span class="speaker">${player.role.name} (${player.name})</span>
                    <span class="speech-text">${speech.replace(/\n/g, '<br>')}</span>
                </div>
            `;
    } else {
      logEl.className = `log-entry ${log.type}`;
      logEl.innerHTML = String(log.message).replace(/\n/g, '<br>');
    }
    logContainer.appendChild(logEl);
  });
  logContainer.scrollTop = logContainer.scrollHeight;
}

/**
 * 【剧本杀】添加一条游戏日志
 */
function logToScriptKillGame(message, type = 'system') {
  scriptKillGameState.gameLog.push({ message, type });
  renderScriptKillGameScreen();
}

/**
 * 【剧本杀 V4 - 新流程版】更新底部操作区域的按钮
 */
function updateActionAreaSK() {
  const actionArea = document.getElementById('script-kill-action-area');
  actionArea.innerHTML = '';
  const user = scriptKillGameState.players.find(p => p.isUser);

  const phase = scriptKillGameState.gamePhase;
  const searchCount = scriptKillGameState.evidenceCounts[user.id] || 0;

  if (phase === 'evidence_round_1' || phase === 'evidence_round_2') {
    let searchesLeftInRound, totalInRound;
    if (phase === 'evidence_round_1') {
      searchesLeftInRound = 2 - searchCount;
      totalInRound = 2;
    } else {
      // evidence_round_2
      searchesLeftInRound = 3 - searchCount;
      totalInRound = 1;
    }

    const searchBtn = document.createElement('button');
    searchBtn.id = 'sk-search-evidence-btn';
    searchBtn.className = 'form-button';
    searchBtn.textContent = `搜证 (${searchesLeftInRound}/${totalInRound})`;
    searchBtn.disabled = searchesLeftInRound <= 0;
    actionArea.appendChild(searchBtn);

    const endSearchBtn = document.createElement('button');
    endSearchBtn.id = 'sk-end-search-btn';
    endSearchBtn.className = 'form-button-secondary';
    endSearchBtn.textContent = phase === 'evidence_round_1' ? '进入第一轮讨论' : '进入第二轮讨论';
    actionArea.appendChild(endSearchBtn);
  } else if (phase === 'discussion_round_1' || phase === 'discussion_round_2' || phase === 'discussion_round_3') {
    const speakBtn = document.createElement('button');
    speakBtn.id = 'sk-speak-btn';
    speakBtn.className = 'form-button';
    speakBtn.textContent = '我要发言';
    actionArea.appendChild(speakBtn);
  } else if (!scriptKillGameState.isActive && phase === 'end') {
    const backBtn = document.createElement('button');
    backBtn.className = 'form-button';
    backBtn.textContent = '返回游戏大厅';
    backBtn.onclick = () => showScreen('game-hall-screen');
    actionArea.appendChild(backBtn);
  }
}

// ▼▼▼ 【剧本杀输入框美化版】请用这个【全新】的函数，完整替换掉你旧的 waitForUserActionSK 函数 ▼▼▼
/**
 * 【剧本杀 V2 - 输入框美化版】等待用户行动的通用函数
 */
function waitForUserActionSK(promptText, actionType, placeholder = '') {
  return new Promise(resolve => {
    const actionArea = document.getElementById('script-kill-action-area');
    actionArea.innerHTML = '';
    actionArea.className = 'script-kill-action-area'; // 重置class

    if (actionType === 'speak') {
      // --- 这是我们美化后的发言输入区 ---
      actionArea.classList.add('speaking-mode'); // 激活新CSS

      const textarea = document.createElement('textarea');
      textarea.id = 'user-sk-speech-input'; // 使用剧本杀专用的ID
      textarea.rows = 1;
      textarea.placeholder = placeholder || '请输入你的发言...';
      // 实时调整高度
      textarea.addEventListener('input', () => {
        textarea.style.height = 'auto';
        textarea.style.height = textarea.scrollHeight + 'px';
      });

      const endBtn = document.createElement('button');
      endBtn.id = 'sk-end-speech-btn'; // 使用剧本杀专用的ID
      endBtn.className = 'form-button';
      endBtn.textContent = '结束发言';

      actionArea.appendChild(textarea);
      actionArea.appendChild(endBtn);

      textarea.focus();

      endBtn.onclick = () => {
        const speech = textarea.value.trim() || '我没什么好说的，过。';
        actionArea.innerHTML = '';
        actionArea.classList.remove('speaking-mode');
        resolve(speech);
      };
      return; // 结束 'speak' 分支
    }

    // --- 以下是投票逻辑，保持原样 ---
    else if (actionType === 'vote') {
      const modal = document.getElementById('script-kill-vote-modal');
      const optionsEl = document.getElementById('sk-vote-options-list');
      optionsEl.innerHTML = '';

      scriptKillGameState.players.forEach(player => {
        const label = document.createElement('label');
        label.innerHTML = `<input type="radio" name="sk_vote_target" value="${player.id}"> ${player.role.name} (${player.name})`;
        optionsEl.appendChild(label);
      });

      document.getElementById('confirm-sk-vote-btn').onclick = () => {
        const selected = document.querySelector('input[name="sk_vote_target"]:checked');
        if (selected) {
          modal.classList.remove('visible');
          resolve(selected.value);
        } else {
          alert('请选择一个投票对象！');
        }
      };
      document.getElementById('cancel-sk-vote-btn').onclick = () => {
        modal.classList.remove('visible');
        resolve(null); // 用户取消
      };
      modal.classList.add('visible');
    }
  });
}
// ▲▲▲ 替换结束 ▲▲▲
/**
 * 【全新】处理单个AI的搜证行动 (每次只搜一个线索)
 * @param {object} player - 正在行动的AI玩家对象
 */
async function handleAiSearch(player) {
  const script = scriptKillGameState.script;

  // 消耗一次搜证机会
  scriptKillGameState.evidenceCounts[player.id] = (scriptKillGameState.evidenceCounts[player.id] || 0) + 1;

  let foundMessage = ''; // 用于记录本轮搜证的结果

  // 1. 增加随机性：有30%的几率什么都搜不到
  if (Math.random() < 0.3) {
    foundMessage = '什么都没发现。';
  } else {
    // 2. 找出所有【全局还未被发现】的线索
    const uncollectedClues = script.clues.filter(c => !scriptKillGameState.collectedClueIds.has(c.description));

    if (uncollectedClues.length > 0) {
      // 3. 随机找到一条新线索
      const foundClue = uncollectedClues[Math.floor(Math.random() * uncollectedClues.length)];
      const clueSource = foundClue.owner === '公共' ? '公共区域' : `角色 ${foundClue.owner} 的私人物品`;

      // 4. 将线索存入AI手牌和全局线索池
      player.evidence.push({ description: foundClue.description, source: clueSource });
      scriptKillGameState.collectedClueIds.add(foundClue.description);

      let revealed = true; // 默认公开

      // 5. 如果线索是关于自己的，让AI决策是否公开
      if (foundClue.owner === player.role.name) {
        const revealDecision = await triggerScriptKillAiAction(player.id, 'reveal_clue', {
          clue: foundClue.description,
        });
        if (revealDecision && revealDecision.action === 'hide') {
          revealed = false;
        }
      }

      // 6. 根据AI的决策，记录不同的搜证结果
      if (revealed) {
        foundMessage = `在【${clueSource}】发现并公开了线索：“${foundClue.description}”`;
      } else {
        foundMessage = `在【${clueSource}】发现了一条关于自己的线索，并选择将其隐藏。`;
      }
    } else {
      foundMessage = '没有发现更多新线索了。';
    }
  }

  // 7. 将搜证结果记录到游戏日志
  logToScriptKillGame(`${player.name} 完成了一次搜证: ${foundMessage}`);
  await sleep(1500);
}

/**
 * 【剧本杀-AI核心】触发AI行动
 */
async function triggerScriptKillAiAction(playerId, action, context = {}) {
  const player = scriptKillGameState.players.find(p => p.id === playerId);
  if (!player) return;

  const { proxyUrl, apiKey, model } = state.apiConfig;

  // ▼▼▼ 请用下面这【一整块】代码，完整替换掉旧的 systemPrompt 变量定义 ▼▼▼
  let jsonFormat = '';
  let extraContext = '';
  let systemPrompt = `
# 任务: 剧本杀角色扮演
# 你的双重身份 (必须严格遵守)
1.  **你的本体**: 你的真实身份是 **${player.name}**，你的核心性格是：**${player.persona}**。
2.  **你的剧本角色**: 在这场游戏中，你需要扮演角色 **【${player.role.name}】**。
    -   **剧本身份设定**: ${player.role.description}
    -   **你的故事线 (时间线)**: ${player.role.storyline} 
    -   **剧本秘密任务**: ${player.role.tasks}

# 你已掌握的线索: 
${player.evidence.map(e => `- ${e.description}`).join('\n') || '(暂无线索)'}

# 当前游戏阶段: ${scriptKillGameState.gamePhase}
# 游戏日志 (最近50条):
${scriptKillGameState.gameLog
  .slice(-50)
  .map(log => {
    if (log.type === 'speech') return `${log.message.player.role.name}: ${log.message.speech}`;
    return log.message;
  })
  .join('\n')}
${extraContext}
# 你的行动指令
`;

  // ▲▲▲ 替换结束 ▲▲▲

  switch (action) {
    case 'introduce':
      systemPrompt += '现在轮到你进行自我介绍。请根据你的人设，以第一人称进行一段简短的介绍。';
      jsonFormat = '{"action": "speak", "speech": "你的自我介绍..."}';
      break;
    // ▼▼▼ 【全新】在这里为AI添加“讨论时间线”的新指令 ▼▼▼
    case 'discuss_timeline':
      systemPrompt +=
        '现在是时间线陈述环节。请根据你的角色剧本（包括身份设定和秘密任务），详细、清晰地陈述你在案发时间段内的行动轨迹。你的发言必须是第一人称，并且要听起来自然，可以适当隐藏对你不利的信息，但不能凭空捏造。';
      jsonFormat = '{"action": "speak", "speech": "你的时间线陈述..."}';
      break;
    // ▲▲▲ 新增指令结束 ▲▲▲
    case 'discuss':
      systemPrompt += '现在是自由讨论环节。请根据你掌握的线索和场上其他人的发言，发表你的看法、提出疑问或指证他人。';
      jsonFormat = '{"action": "speak", "speech": "你的发言..."}';
      break;
    case 'vote':
      systemPrompt += '现在是最终投票环节。请综合所有信息，投出你认为的凶手。';
      jsonFormat = '{"action": "vote", "targetId": "你投票的玩家ID"}';
      break;
    // ▼▼▼ 在 triggerScriptKillAiAction 函数的 switch 语句内添加这个 case ▼▼▼
    case 'reveal_clue':
      systemPrompt += `你刚刚搜到了一个关于你自己的线索：“${context.clue}”。\n公开这条线索可能会让你暴露，但也可能洗清嫌疑；隐藏它可能会让你在后期被动。\n请根据你的人设和任务，决定是公开还是隐藏。`;
      jsonFormat = '{"action": "reveal" or "hide", "reasoning": "你的决策理由..."}';
      break;
    // ▲▲▲ 添加结束 ▲▲▲
  }

  systemPrompt += `\n# 存活玩家列表:\n${scriptKillGameState.players
    .map(p => `- ${p.role.name} (id: ${p.id})`)
    .join('\n')}\n# 输出格式: 你的回复【必须且只能】是一个严格的JSON对象，格式如下:\n${jsonFormat}`;

  try {
    let isGemini = proxyUrl === GEMINI_API_URL;
    let messagesForApi = [{ role: 'user', content: systemPrompt }];
    let geminiConfig = toGeminiRequestData(
      model,
      apiKey,
      systemPrompt,
      messagesForApi,
      isGemini,
      state.apiConfig.temperature,
    );

    const response = isGemini
      ? await fetch(geminiConfig.url, geminiConfig.data)
      : await fetch(`${proxyUrl}/v1/chat/completions`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${apiKey}` },
          body: JSON.stringify({
            model,
            messages: messagesForApi,
            temperature: parseFloat(state.apiConfig.temperature) || 0.8,
            response_format: { type: 'json_object' },
          }),
        });

    if (!response.ok) throw new Error(await response.text());
    const data = await response.json();
    const content = (isGemini ? data.candidates[0].content.parts[0].text : data.choices[0].message.content).replace(
      /^```json\s*|```$/g,
      '',
    );
    // ▼▼▼ 用这块新代码替换旧的 return 逻辑 ▼▼▼
    const aiAction = JSON.parse(content);

    if (aiAction.action === 'speak') return aiAction.speech;
    if (aiAction.action === 'vote') return aiAction.targetId;
    if (action === 'reveal_clue') return aiAction; // 【核心修改】返回整个决策对象

    return null;
    // ▲▲▲ 替换结束 ▲▲▲
  } catch (error) {
    console.error(`AI (${player.name}) 行动失败:`, error);
    // 返回一个保底的行动，防止游戏卡死
    if (action === 'vote') {
      const potentialTargets = scriptKillGameState.players.filter(p => p.id !== player.id);
      return potentialTargets[Math.floor(Math.random() * potentialTargets.length)].id;
    }
    return '我...我需要再想想。';
  }
}

// ▼▼▼ 用这块新代码替换旧的 getBuiltInScript 函数 ▼▼▼

/**
 * 【剧本杀】根据ID获取一个内置剧本
 * @param {string} scriptId - 要获取的剧本的ID, 例如 'built_in_1'
 * @returns {object|null} - 找到的剧本对象，或 null
 */
function getBuiltInScript(scriptId) {
  // 【核心修改】我们现在从 BUILT_IN_SCRIPTS 数组中查找匹配的剧本
  return BUILT_IN_SCRIPTS.find(script => script.id === scriptId) || null;
}

// ▲▲▲ 替换结束 ▲▲▲

// --- 【全新】剧本杀自定义剧本管理核心功能 ---

let editingScriptId = null; // 用于追踪正在编辑的剧本ID

/**
 * 【总入口】打开自定义剧本管理模态框
 */
async function openScriptManager() {
  await renderScriptManagerList();
  document.getElementById('script-kill-manager-modal').classList.add('visible');
}

/**
 * 渲染自定义剧本列表
 */
async function renderScriptManagerList() {
  const listEl = document.getElementById('custom-scripts-list');
  listEl.innerHTML = '';
  const scripts = await db.scriptKillScripts.toArray();

  if (scripts.length === 0) {
    listEl.innerHTML =
      '<p style="text-align:center; color: var(--text-secondary); padding: 50px 0;">还没有自定义剧本，点击右上角“添加”创建一个吧！</p>';
    return;
  }

  scripts.forEach(script => {
    const item = document.createElement('div');
    item.className = 'list-item'; // 复用现有样式
    item.innerHTML = `
            <div class="item-title">${script.name}</div>
            <div class="item-content">${(script.storyBackground || '暂无简介').substring(0, 50)}...</div>
        `;
    // 为整个列表项添加点击事件，用于编辑
    item.addEventListener('click', () => openScriptEditorForEdit(script.id));
    // 为列表项添加长按事件，用于删除
    addLongPressListener(item, () => deleteCustomScript(script.id, script.name));
    listEl.appendChild(item);
  });
}

/**
 * 打开剧本编辑器（用于创建新剧本）
 */
function openScriptEditorForCreate() {
  editingScriptId = null; // 标记为创建模式
  document.getElementById('script-editor-title').textContent = '创建新剧本';
  document.getElementById('script-name-input').value = '';
  document.getElementById('script-background-input').value = '';
  // 提供一个JSON结构示例，方便用户填写
  const jsonExample = {
    roles: [
      { name: '角色A', description: '...', tasks: '...', isKiller: true },
      { name: '角色B', description: '...', tasks: '...', isKiller: false },
    ],
    clues: [
      { owner: '角色A', description: '线索描述...', isKey: false },
      { owner: '公共', description: '公共线索...' },
    ],
    truth: '真相是...',
  };
  document.getElementById('script-roles-json-input').value = JSON.stringify(jsonExample, null, 2);

  document.getElementById('script-kill-editor-modal').classList.add('visible');
}

/**
 * 打开剧本编辑器（用于编辑现有剧本）
 * @param {number} scriptId - 要编辑的剧本ID
 */
async function openScriptEditorForEdit(scriptId) {
  editingScriptId = scriptId;
  const script = await db.scriptKillScripts.get(scriptId);
  if (!script) return;

  document.getElementById('script-editor-title').textContent = `编辑剧本: ${script.name}`;
  document.getElementById('script-name-input').value = script.name;
  document.getElementById('script-background-input').value = script.storyBackground;

  // 将 roles, clues, truth 重新组合成一个对象并格式化为JSON
  const jsonData = {
    roles: script.roles,
    clues: script.clues,
    truth: script.truth,
  };
  document.getElementById('script-roles-json-input').value = JSON.stringify(jsonData, null, 2);

  document.getElementById('script-kill-editor-modal').classList.add('visible');
}

// ▼▼▼ 用这块【可视化版】代码，替换旧的 saveCustomScript 函数 ▼▼▼
/**
 * 【可视化版】保存或更新自定义剧本
 */
async function saveCustomScript() {
  const name = document.getElementById('script-name-input').value.trim();
  const background = document.getElementById('script-background-input').value.trim();
  const truth = document.getElementById('sk-truth-input').value.trim();

  if (!name || !background || !truth) {
    alert('剧本名称、故事背景和最终真相都不能为空！');
    return;
  }

  // 从 currentEditingScriptData 全局变量中获取角色和线索数据
  if (!currentEditingScriptData.roles || currentEditingScriptData.roles.length === 0) {
    alert('请至少添加一个角色！');
    return;
  }

  try {
    const scriptData = {
      name: name,
      storyBackground: background,
      roles: currentEditingScriptData.roles,
      clues: currentEditingScriptData.clues,
      truth: truth,
      isBuiltIn: false,
    };

    if (editingScriptId) {
      await db.scriptKillScripts.update(editingScriptId, scriptData);
      alert('剧本更新成功！');
    } else {
      await db.scriptKillScripts.add(scriptData);
      alert('新剧本保存成功！');
    }

    document.getElementById('script-kill-editor-modal').classList.remove('visible');
    await renderScriptManagerList(); // 刷新管理列表
    editingScriptId = null;
  } catch (error) {
    alert(`保存失败: ${error.message}`);
  }
}
// ▲▲▲ 替换结束 ▲▲▲
// ▼▼▼ 把这一整块全新的功能函数，粘贴到 init() 函数的【正上方】 ▼▼▼

// --- 【全新】剧本杀可视化编辑器核心功能 ---

let currentEditingScriptData = { roles: [], clues: [] }; // 用于暂存正在编辑的剧本数据
let editingItemIndex = -1; // -1 表示新建，否则为被编辑项的索引

/**
 * 渲染可视化剧本编辑器的主界面
 */
function renderVisualScriptEditor() {
  const rolesContainer = document.getElementById('sk-roles-container');
  const cluesContainer = document.getElementById('sk-clues-container');
  rolesContainer.innerHTML = '';
  cluesContainer.innerHTML = '';

  // 渲染角色列表
  currentEditingScriptData.roles.forEach((role, index) => {
    const itemEl = document.createElement('div');
    itemEl.className = 'sk-editor-item';
    itemEl.innerHTML = `
            <div class="item-info">
                <div class="item-name">${role.name} ${role.isKiller ? '🔪' : ''}</div>
                <div class="item-meta">${role.description.substring(0, 20)}...</div>
            </div>
            <div class="item-actions">
                <button class="form-button-secondary edit-role-btn" data-index="${index}">编辑</button>
                <button class="form-button-secondary delete-role-btn" data-index="${index}" style="border-color:#ff3b30; color:#ff3b30;">删除</button>
            </div>
        `;
    rolesContainer.appendChild(itemEl);
  });

  // 渲染线索列表
  currentEditingScriptData.clues.forEach((clue, index) => {
    const itemEl = document.createElement('div');
    itemEl.className = 'sk-editor-item';
    itemEl.innerHTML = `
            <div class="item-info">
                <div class="item-name">线索 ${index + 1}</div>
                <div class="item-meta">归属于: ${clue.owner}</div>
            </div>
            <div class="item-actions">
                <button class="form-button-secondary edit-clue-btn" data-index="${index}">编辑</button>
                <button class="form-button-secondary delete-clue-btn" data-index="${index}" style="border-color:#ff3b30; color:#ff3b30;">删除</button>
            </div>
        `;
    cluesContainer.appendChild(itemEl);
  });
}

/**
 * 打开角色编辑器（新建或编辑）
 */
function openRoleEditor(index = -1) {
  editingItemIndex = index;
  const modal = document.getElementById('sk-item-editor-modal');
  document.getElementById('sk-role-editor-fields').style.display = 'block';
  document.getElementById('sk-clue-editor-fields').style.display = 'none';

  if (index > -1) {
    // 编辑模式
    const role = currentEditingScriptData.roles[index];
    document.getElementById('sk-item-editor-title').textContent = `编辑角色: ${role.name}`;
    document.getElementById('sk-role-name-input').value = role.name;
    document.getElementById('sk-role-desc-input').value = role.description;
    // ▼▼▼ 在这里添加下面这行新代码 ▼▼▼
    document.getElementById('sk-role-storyline-input').value = role.storyline || ''; // 使用 || '' 确保旧数据不会显示'undefined'
    // ▲▲▲ 新代码粘贴结束 ▲▲▲
    document.getElementById('sk-role-tasks-input').value = role.tasks;
    document.getElementById('sk-role-killer-toggle').checked = role.isKiller;
  } else {
    // 新建模式
    document.getElementById('sk-item-editor-title').textContent = '添加新角色';
    document.getElementById('sk-role-name-input').value = '';
    document.getElementById('sk-role-desc-input').value = '';
    // ▼▼▼ 在这里添加下面这行新代码 ▼▼▼
    document.getElementById('sk-role-storyline-input').value = ''; // 新建时清空
    // ▲▲▲ 新代码粘贴结束 ▲▲▲
    document.getElementById('sk-role-tasks-input').value = '';
    document.getElementById('sk-role-killer-toggle').checked = false;
  }
  modal.classList.add('visible');
}

/**
 * 打开线索编辑器（新建或编辑）
 */
function openClueEditor(index = -1) {
  editingItemIndex = index;
  const modal = document.getElementById('sk-item-editor-modal');
  document.getElementById('sk-role-editor-fields').style.display = 'none';
  document.getElementById('sk-clue-editor-fields').style.display = 'block';

  // 动态填充线索归属的下拉菜单
  const ownerSelect = document.getElementById('sk-clue-owner-select');
  ownerSelect.innerHTML = '<option value="公共">公共线索</option>';
  currentEditingScriptData.roles.forEach(role => {
    const option = document.createElement('option');
    option.value = role.name;
    option.textContent = `角色: ${role.name}`;
    ownerSelect.appendChild(option);
  });

  if (index > -1) {
    // 编辑模式
    const clue = currentEditingScriptData.clues[index];
    document.getElementById('sk-item-editor-title').textContent = `编辑线索 ${index + 1}`;
    ownerSelect.value = clue.owner;
    document.getElementById('sk-clue-desc-input').value = clue.description;
    document.getElementById('sk-clue-key-toggle').checked = clue.isKey || false;
  } else {
    // 新建模式
    document.getElementById('sk-item-editor-title').textContent = '添加新线索';
    ownerSelect.value = '公共';
    document.getElementById('sk-clue-desc-input').value = '';
    document.getElementById('sk-clue-key-toggle').checked = false;
  }
  modal.classList.add('visible');
}

/**
 * 保存子编辑器（角色或线索）中的数据
 */
function saveItemFromEditor() {
  const isRoleEditor = document.getElementById('sk-role-editor-fields').style.display === 'block';

  if (isRoleEditor) {
    const roleData = {
      name: document.getElementById('sk-role-name-input').value.trim(),
      description: document.getElementById('sk-role-desc-input').value.trim(),
      // ▼▼▼ 在这里添加下面这行新代码 ▼▼▼
      storyline: document.getElementById('sk-role-storyline-input').value.trim(),
      // ▲▲▲ 新代码粘贴结束 ▲▲▲
      tasks: document.getElementById('sk-role-tasks-input').value.trim(),
      isKiller: document.getElementById('sk-role-killer-toggle').checked,
    };
    if (!roleData.name) {
      alert('角色名称不能为空！');
      return;
    }

    if (editingItemIndex > -1) {
      currentEditingScriptData.roles[editingItemIndex] = roleData;
    } else {
      currentEditingScriptData.roles.push(roleData);
    }
  } else {
    const clueData = {
      owner: document.getElementById('sk-clue-owner-select').value,
      description: document.getElementById('sk-clue-desc-input').value.trim(),
      isKey: document.getElementById('sk-clue-key-toggle').checked,
    };
    if (!clueData.description) {
      alert('线索描述不能为空！');
      return;
    }

    if (editingItemIndex > -1) {
      currentEditingScriptData.clues[editingItemIndex] = clueData;
    } else {
      currentEditingScriptData.clues.push(clueData);
    }
  }

  document.getElementById('sk-item-editor-modal').classList.remove('visible');
  renderVisualScriptEditor(); // 刷新主编辑器界面
}

/**
 * 替换 openScriptEditorForCreate 函数
 */
function openScriptEditorForCreate() {
  editingScriptId = null;
  currentEditingScriptData = { roles: [], clues: [] }; // 清空暂存数据
  document.getElementById('script-editor-title').textContent = '创建新剧本';
  document.getElementById('script-name-input').value = '';
  document.getElementById('script-background-input').value = '';
  document.getElementById('sk-truth-input').value = '';
  renderVisualScriptEditor(); // 渲染空的编辑器
  document.getElementById('script-kill-editor-modal').classList.add('visible');
}

/**
 * 替换 openScriptEditorForEdit 函数
 */
async function openScriptEditorForEdit(scriptId) {
  editingScriptId = scriptId;
  const script = await db.scriptKillScripts.get(scriptId);
  if (!script) return;

  // 将数据库数据加载到暂存对象
  currentEditingScriptData = {
    roles: script.roles || [],
    clues: script.clues || [],
  };

  document.getElementById('script-editor-title').textContent = `编辑剧本: ${script.name}`;
  document.getElementById('script-name-input').value = script.name;
  document.getElementById('script-background-input').value = script.storyBackground;
  document.getElementById('sk-truth-input').value = script.truth;

  renderVisualScriptEditor(); // 渲染带有数据的编辑器
  document.getElementById('script-kill-editor-modal').classList.add('visible');
}

// --- ▲▲▲ 新增功能函数结束 ▲▲▲

/**
 * 删除一个自定义剧本
 * @param {number} scriptId - 要删除的剧本ID
 * @param {string} scriptName - 剧本名称，用于确认提示
 */
async function deleteCustomScript(scriptId, scriptName) {
  const confirmed = await showCustomConfirm('删除剧本', `确定要永久删除自定义剧本《${scriptName}》吗？`, {
    confirmButtonClass: 'btn-danger',
  });
  if (confirmed) {
    await db.scriptKillScripts.delete(scriptId);
    await renderScriptManagerList();
    alert('剧本已删除。');
  }
}

// --- ▲▲▲ 新增功能函数结束 ▲▲▲
// ▼▼▼ 在 init() 函数的【正上方】粘贴下面这一整块新代码 ▼▼▼

/**
 * 【剧本杀】AI核心：调用AI为整局游戏生成复盘摘要
 * @returns {Promise<string>} - AI生成的摘要文本
 */
async function generateAiSkSummary() {
  const { proxyUrl, apiKey, model } = state.apiConfig;
  if (!proxyUrl || !apiKey || !model) {
    return '（AI摘要生成失败：API未配置）';
  }

  const formattedLog = scriptKillGameState.gameLog
    .map(log => {
      if (log.type === 'speech') {
        return `${log.message.player.role.name}: ${log.message.speech}`;
      }
      return log.message;
    })
    .join('\n');

  const killer = scriptKillGameState.players.find(p => p.role.isKiller)?.role.name || '未知';

  const prompt = `
# 任务
你是一位专业的剧本杀复盘DM。请根据以下完整的游戏日志，用200字左右，客观、精炼地总结本局游戏的【关键事件】、【重要线索】和【玩家逻辑】。

# 核心要求
- 你的总结需要有逻辑、有条理，像一个真正的游戏复盘。
- 点出关键线索是如何被发现和利用的。
- 分析凶手(${killer})是如何隐藏自己的，以及好人阵营的推理亮点或误区。
- 你的输出【必须且只能】是复盘摘要的纯文本内容，不要包含任何额外的对话或标题。

# 游戏日志
${formattedLog}
`;

  try {
    const messagesForApi = [{ role: 'user', content: prompt }];
    let isGemini = proxyUrl === GEMINI_API_URL;
    let geminiConfig = toGeminiRequestData(model, apiKey, prompt, messagesForApi, isGemini);

    const response = isGemini
      ? await fetch(geminiConfig.url, geminiConfig.data)
      : await fetch(`${proxyUrl}/v1/chat/completions`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${apiKey}` },
          body: JSON.stringify({
            model: model,
            messages: messagesForApi,
            temperature: parseFloat(state.apiConfig.temperature) || 0.8,
          }),
        });

    if (!response.ok) throw new Error(await response.text());
    const data = await response.json();
    return (isGemini ? data.candidates[0].content.parts[0].text : data.choices[0].message.content).trim();
  } catch (error) {
    console.error('AI摘要生成失败:', error);
    return '（AI摘要生成失败，请检查网络或API设置）';
  }
}

// ▼▼▼ 用这个【功能增强版】函数，完整替换你旧的 generateSkSummary 函数 ▼▼▼
/**
 * 【剧本杀 V2 - 增强版】生成游戏复盘的文本，包含AI摘要和投票详情
 * @param {string} winner - 胜利的阵营名称
 * @param {string} aiSummary - AI生成的摘要文本
 * @returns {string} - 格式化后的完整复盘Markdown文本
 */
function generateSkSummary(winner, aiSummary) {
  const roleNameMap = {
    wolf: '狼人',
    villager: '平民',
    seer: '预言家',
    witch: '女巫',
    hunter: '猎人',
    guard: '守卫',
    idiot: '白痴',
  };

  let summaryText = `**剧本杀 - 游戏复盘**\n\n`;
  summaryText += `**剧本:** ${scriptKillGameState.script.name}\n`;
  summaryText += `🏆 **胜利方:** ${winner}\n\n`;

  summaryText += `**本局摘要:**\n${aiSummary}\n\n`;

  summaryText += `**玩家身份:**\n`;
  scriptKillGameState.players.forEach(p => {
    const roleName = p.role.name || '未知角色';
    const isKiller = p.role.isKiller ? ' (🔪凶手)' : '';
    summaryText += `- ${p.name}: 扮演 ${roleName}${isKiller}\n`;
  });

  // --- ▼▼▼ 这就是我们本次新增的核心代码！▼▼▼ ---
  summaryText += `\n**投票详情:**\n`;
  const votes = scriptKillGameState.votes;
  const playerMap = new Map(scriptKillGameState.players.map(p => [p.id, p.name]));

  for (const voterId in votes) {
    const voterName = playerMap.get(voterId) || '未知投票者';
    const targetId = votes[voterId];

    if (targetId) {
      // 如果不是弃票
      const targetName = playerMap.get(targetId) || '未知目标';
      summaryText += `- ${voterName}  →  ${targetName}\n`;
    } else {
      // 如果是弃票
      summaryText += `- ${voterName}  →  弃票\n`;
    }
  }
  // --- ▲▲▲ 新增代码结束 ▲▲▲ ---

  return summaryText;
}
// ▲▲▲ 替换结束 ▲▲▲

/**
 * 【剧本杀】显示游戏结算卡片模态框
 * @param {string} summaryText - 复盘文本
 */
function showScriptKillSummaryModal(summaryText) {
  const modal = document.getElementById('script-kill-summary-modal');
  const contentEl = document.getElementById('script-kill-summary-content');

  contentEl.innerHTML = renderMarkdown(summaryText);

  const repostBtn = document.getElementById('repost-sk-summary-btn');
  const newRepostBtn = repostBtn.cloneNode(true);
  repostBtn.parentNode.replaceChild(newRepostBtn, repostBtn);
  newRepostBtn.onclick = () => openSkSummaryTargetPicker(summaryText);

  const backBtn = document.getElementById('back-to-hall-from-sk-btn');
  const newBackBtn = backBtn.cloneNode(true);
  backBtn.parentNode.replaceChild(newBackBtn, backBtn);
  newBackBtn.onclick = () => {
    modal.classList.remove('visible');
    showScreen('game-hall-screen');
  };

  modal.classList.add('visible');
}

/**
 * 【剧本杀】打开复盘发送目标选择器
 * @param {string} summaryText - 要转发的复盘文本
 */
function openSkSummaryTargetPicker(summaryText) {
  const modal = document.getElementById('script-kill-target-picker-modal');
  const listEl = document.getElementById('script-kill-target-list');
  listEl.innerHTML = '';

  const aiPlayers = scriptKillGameState.players.filter(p => !p.isUser);

  if (aiPlayers.length === 0) {
    alert('没有可转发的AI玩家。');
    return;
  }

  aiPlayers.forEach(player => {
    const item = document.createElement('div');
    item.className = 'player-selection-item';
    item.innerHTML = `
            <input type="checkbox" class="script-kill-target-checkbox" value="${player.id}" checked>
            <img src="${player.avatar || defaultAvatar}" alt="${player.name}">
            <span class="name">${player.name}</span>
        `;
    listEl.appendChild(item);
  });

  const confirmBtn = document.getElementById('sk-confirm-share-btn');
  const newConfirmBtn = confirmBtn.cloneNode(true);
  confirmBtn.parentNode.replaceChild(newConfirmBtn, confirmBtn);
  newConfirmBtn.onclick = () => {
    const selectedIds = Array.from(document.querySelectorAll('.script-kill-target-checkbox:checked')).map(
      cb => cb.value,
    );
    if (selectedIds.length > 0) {
      sendSkSummaryToSelectedPlayers(summaryText, selectedIds);
    } else {
      alert('请至少选择一个转发对象！');
    }
  };

  modal.classList.add('visible');
}

/**
 * 【剧本杀】将游戏复盘发送到【选定】的AI角色的单聊中
 * @param {string} summaryText - 复盘文本
 * @param {string[]} targetIds - 目标AI角色的ID数组
 */
async function sendSkSummaryToSelectedPlayers(summaryText, targetIds) {
  document.getElementById('script-kill-summary-modal').classList.remove('visible');
  document.getElementById('script-kill-target-picker-modal').classList.remove('visible');
  let sentCount = 0;

  const aiContext = `[系统指令：刚刚结束了一局剧本杀，这是游戏复盘。请根据这个复盘内容，以你的角色人设，和用户聊聊刚才的游戏。]\n\n${summaryText}`;

  for (const chatId of targetIds) {
    const chat = state.chats[chatId];
    if (chat) {
      const visibleMessage = {
        role: 'user',
        type: 'text',
        timestamp: Date.now(),
        content: summaryText,
      };
      const hiddenInstruction = {
        role: 'system',
        content: aiContext,
        timestamp: Date.now() + 1,
        isHidden: true,
      };

      chat.history.push(visibleMessage, hiddenInstruction);
      await db.chats.put(chat);
      sentCount++;
    }
  }

  await showCustomAlert('转发成功', `游戏复盘已发送至 ${sentCount} 位AI玩家的单聊中！`);
  showScreen('game-hall-screen');
}

// ▲▲▲ 新代码粘贴结束 ▲▲▲
// ▼▼▼ 【全新】这是剧本杀AI生成功能的所有核心函数 ▼▼▼

function openAiScriptGenerator() {
  // 隐藏剧本管理弹窗
  document.getElementById('script-kill-manager-modal').classList.remove('visible');

  const modal = document.getElementById('sk-ai-generator-modal');
  // ▼▼▼ 在这里修改 ▼▼▼
  document.getElementById('sk-ai-elements-input').value = ''; // 清空要素输入框
  document.getElementById('sk-ai-summary-input').value = ''; // 清空梗概输入框
  // ▲▲▲ 修改结束 ▲▲▲
  document.getElementById('sk-ai-result-preview').textContent = '点击“开始生成”后，结果将显示在这里...';
  document.getElementById('sk-ai-generator-save-btn').disabled = true;
  tempGeneratedScriptData = null;

  modal.classList.add('visible');
}

/**
 * 【AI核心 V2 - 强制时间线版】根据用户的要素和梗概，调用AI生成剧本
 */
async function generateSkScriptWithAI() {
  // 1. 从新的两个输入框获取数据
  const elements = document.getElementById('sk-ai-elements-input').value.trim();
  const summary = document.getElementById('sk-ai-summary-input').value.trim();
  const playerCount = document.getElementById('sk-ai-player-count-input').value;

  if (!elements) {
    // 核心要素是必填的
    alert('请输入剧本的核心要素！');
    return;
  }

  const previewEl = document.getElementById('sk-ai-result-preview');
  const saveBtn = document.getElementById('sk-ai-generator-save-btn');
  previewEl.textContent = '🧠 AI正在奋力创作中，这可能需要1-2分钟，请耐心等待...';
  saveBtn.disabled = true;

  // 2. 构建给AI的【全新、更严格】的指令(Prompt)
  const systemPrompt = `
# 任务
你是一个专业的剧本杀剧本创作AI。你的任务是根据用户提供的核心要素和剧情梗概，创作一个【${playerCount}人】的、完整、可玩的剧本杀剧本。

# 用户提供的核心要素:
-   **玩家人数**: ${playerCount}人
-   **核心元素**: ${elements}
-   **剧情梗概**: ${summary || '（用户未提供详细梗概，请根据核心元素自由发挥）'}

# 【【【时间线铁律：这是最高指令，必须严格遵守】】】
在生成每个角色的 "storyline" (故事线) 字段时，你【必须】遵循以下规则：
1.  **必须包含明确的时间点**：每一段关键行动前，都必须有一个具体的时间，格式为【**HH:mm**】（例如：**20:30** 或 **晚上8点15分**）。
2.  **必须是具体的行动轨迹**：禁止使用“后来”、“过了一会儿”等模糊描述。必须清楚地写出角色在【什么时间】、【什么地点】、【做了什么事】。
3.  **提供清晰的示例**:
    -   **【【错误的模糊示例】】**: "晚上我和他吵了一架，然后离开了。"
    -   **【【正确的详细示例】】**: "**20:30**: 我在书房因为项目资金问题和王总监大吵一架，他威胁要解雇我。 **20:45**: 我愤怒地摔门而出，回到了自己的工位。"

# 剧本创作核心要求
1.  **完整性**: 你必须生成剧本的所有组成部分，包括：剧本名称(name)、故事背景(storyBackground)、角色设定(roles)、线索卡(clues)、以及最终真相(truth)。
2.  **角色设定 (roles)**:
    -   必须是一个包含【${playerCount}个】角色对象的数组。
    -   每个角色对象必须包含以下字段:
        -   name: 角色名称 (字符串)。
        -   description: 角色简介 (字符串, 简短描述)。
        -   storyline: 角色的个人故事线或时间线 (字符串, **必须遵守【时间线铁律】**)。
        -   tasks: 角色的秘密任务 (字符串)。
        -   isKiller: 是否是凶手 (布尔值, true 或 false)。
    -   剧本中【必须有且只有一个】角色的 isKiller 为 true。
3.  **线索卡 (clues)**:
    -   必须是一个包含多个线索对象的数组。
    -   每个线索对象必须包含以下字段:
        -   owner: 线索归属 (字符串, 可以是某个角色名，也可以是 "公共")。
        -   description: 线索的详细描述 (字符串)。
        -   isKey: 是否是关键线索 (布尔值, true 或 false)。
    -   至少要有一条关键线索。
4.  **最终真相 (truth)**: 必须清晰、有逻辑地揭示整个案件的真相、凶手的动机和作案手法。

# 【格式铁律】
你的回复【必须且只能】是一个严格的JSON对象，直接以 '{' 开头，以 '}' 结尾。禁止包含任何 "json", "\`\`\`" 或其他解释性文字。
`;

  // 3. 调用API (这部分逻辑与之前相同)
  try {
    const { proxyUrl, apiKey, model } = state.apiConfig;
    let isGemini = proxyUrl === GEMINI_API_URL;
    let messagesForApi = [{ role: 'user', content: systemPrompt }];
    let geminiConfig = toGeminiRequestData(
      model,
      apiKey,
      systemPrompt,
      messagesForApi,
      isGemini,
      state.apiConfig.temperature,
    );

    const response = isGemini
      ? await fetch(geminiConfig.url, geminiConfig.data)
      : await fetch(`${proxyUrl}/v1/chat/completions`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${apiKey}` },
          body: JSON.stringify({
            model: model,
            messages: messagesForApi,
            temperature: parseFloat(state.apiConfig.temperature) || 0.8,
            response_format: { type: 'json_object' },
          }),
        });

    if (!response.ok) throw new Error(`API请求失败: ${response.status} - ${await response.text()}`);

    const data = await response.json();
    const rawContent = (isGemini ? data.candidates[0].content.parts[0].text : data.choices[0].message.content)
      .replace(/^```json\s*|```$/g, '')
      .trim();

    const generatedScript = JSON.parse(rawContent);

    if (
      !generatedScript.name ||
      !generatedScript.storyBackground ||
      !Array.isArray(generatedScript.roles) ||
      !Array.isArray(generatedScript.clues) ||
      !generatedScript.truth
    ) {
      throw new Error('AI返回的JSON格式不完整，缺少必要的字段。');
    }

    previewEl.textContent = JSON.stringify(generatedScript, null, 2);
    tempGeneratedScriptData = generatedScript;
    saveBtn.disabled = false;

    await showCustomAlert('生成成功！', '剧本已生成，请在下方预览。如果满意，可以点击保存。');
  } catch (error) {
    console.error('AI剧本生成失败:', error);
    previewEl.textContent = `生成失败！请检查API设置或网络后重试。\n\n错误信息: ${error.message}`;
    await showCustomAlert('生成失败', `发生了一个错误：\n${error.message}`);
  }
}

/**
 * 保存AI生成的剧本
 */
async function saveAiGeneratedScript() {
  if (!tempGeneratedScriptData) {
    alert('没有可以保存的剧本数据。');
    return;
  }

  try {
    const scriptToSave = {
      ...tempGeneratedScriptData,
      isBuiltIn: false, // 标记为非内置剧本
    };

    // 存入数据库
    await db.scriptKillScripts.add(scriptToSave);

    document.getElementById('sk-ai-generator-modal').classList.remove('visible'); // 关闭AI生成器
    await renderScriptManagerList(); // 刷新剧本管理列表

    alert(`剧本《${scriptToSave.name}》已成功保存到你的自定义剧本库中！`);
  } catch (error) {
    console.error('保存AI剧本失败:', error);
    alert(`保存失败: ${error.message}`);
  }
}

// ▲▲▲ 新增功能函数结束 ▲▲▲

// ▲▲▲ 剧本杀功能函数结束 ▲▲▲
// ▼▼▼ 【全新】这里是“你说我猜”游戏的所有核心功能函数 ▼▼▼

// ▼▼▼ 【全新】这里是“你说我猜”游戏的所有核心功能函数 ▼▼▼

/**
 * 【你说我猜】打开游戏设置界面 (V2 - 复选框版)
 */
async function openGuessWhatSetup() {
  // 重置游戏状态，以防上次游戏数据残留
  guessWhatGameState = {
    isActive: false,
    mode: 'ai_guesses',
    opponent: null,
    secretWord: '',
    gameLog: [],
    currentTurn: 'user',
  };

  showScreen('guess-what-setup-screen');
  const selectionEl = document.getElementById('guess-what-player-selection');
  selectionEl.innerHTML = '<p>正在加载玩伴列表...</p>';

  const singleChats = Object.values(state.chats).filter(chat => !chat.isGroup);
  const allNpcs = Object.values(state.chats).flatMap(chat =>
    (chat.npcLibrary || []).map(npc => ({ ...npc, owner: chat.name })),
  );
  let playerOptions = [
    ...singleChats.map(c => ({ id: c.id, name: c.name, avatar: c.settings.aiAvatar, type: '角色' })),
    ...allNpcs.map(n => ({ id: n.id, name: n.name, avatar: n.avatar, type: `NPC (${n.owner})` })),
  ];

  selectionEl.innerHTML = '';
  if (playerOptions.length === 0) {
    selectionEl.innerHTML = '<p style="text-align:center; color: var(--text-secondary);">还没有可以一起玩的好友哦~</p>';
    return;
  }

  // 【核心修改1】使用复选框，并添加专属class
  playerOptions.forEach((player, index) => {
    const item = document.createElement('div');
    item.className = 'player-selection-item';
    item.innerHTML = `
            <input type="checkbox" class="guess-what-player-checkbox" value="${player.id}" id="opponent-${player.id}" ${
      index === 0 ? 'checked' : ''
    }>
            <img src="${player.avatar || defaultAvatar}" alt="${player.name}">
            <span class="name">${player.name}</span>
            <span class="type-tag">${player.type}</span>
        `;
    selectionEl.appendChild(item);
  });

  // 【核心修改2】添加事件监听，实现单选效果
  selectionEl.addEventListener('click', e => {
    if (e.target.type === 'checkbox' && e.target.classList.contains('guess-what-player-checkbox')) {
      // 当点击一个复选框时，取消其他所有同类复选框的选中状态
      document.querySelectorAll('.guess-what-player-checkbox').forEach(cb => {
        if (cb !== e.target) cb.checked = false;
      });
    }
  });

  // 默认显示“我出题”模式的输入框
  document.getElementById('user-word-input-container').style.display = 'block';
}

/**
 * 【你说我猜】开始游戏的核心逻辑 (V2 - 复选框版)
 */
async function startGuessWhatGame() {
  // 【核心修改】修改选择器以匹配新的复选框class
  const selectedOpponentCheckbox = document.querySelector('.guess-what-player-checkbox:checked');
  if (!selectedOpponentCheckbox) {
    alert('请选择一位玩伴！');
    return;
  }
  const opponentId = selectedOpponentCheckbox.value;
  const gameMode = document.querySelector('input[name="guess_what_mode"]:checked').value;
  const userWord = document.getElementById('guess-what-user-word').value.trim();

  if (gameMode === 'ai_guesses' && !userWord) {
    alert('“我出题”模式下，词语不能为空！');
    return;
  }

  await showCustomAlert('请稍候...', '正在准备游戏，AI也在摩拳擦掌...');

  const chat = Object.values(state.chats).find(c => c.id === opponentId);
  let opponentInfo = null;
  if (chat) {
    opponentInfo = { id: chat.id, name: chat.name, avatar: chat.settings.aiAvatar, persona: chat.settings.aiPersona };
  } else {
    for (const c of Object.values(state.chats)) {
      const npc = (c.npcLibrary || []).find(n => n.id === opponentId);
      if (npc) {
        opponentInfo = { id: npc.id, name: npc.name, avatar: npc.avatar, persona: npc.persona };
        break;
      }
    }
  }
  if (!opponentInfo) {
    alert('找不到所选的玩伴信息！');
    return;
  }

  guessWhatGameState.isActive = true;
  guessWhatGameState.mode = gameMode;
  guessWhatGameState.opponent = opponentInfo;
  guessWhatGameState.gameLog = [];

  document.getElementById('guess-what-game-title').textContent = `与 ${opponentInfo.name} 的游戏`;
  const inputEl = document.getElementById('guess-what-user-input');

  if (gameMode === 'ai_guesses') {
    guessWhatGameState.secretWord = userWord;
    guessWhatGameState.currentTurn = 'user';
    logToGuessWhatGame('游戏开始！你来出题，请给出你的第一个提示。', 'system');
    inputEl.placeholder = '请给出第一个提示...';
    inputEl.disabled = false;
  } else {
    const { secretWord, firstHint } = await triggerGuessWhatAiAction('generate_word');
    if (!secretWord) {
      await showCustomAlert('出题失败', '抱歉，AI今天好像没灵感，想不出题目来。请稍后再试或检查API设置。');
      guessWhatGameState.isActive = false;
      showScreen('game-hall-screen');
      return;
    }
    guessWhatGameState.secretWord = secretWord;
    guessWhatGameState.currentTurn = 'user';
    logToGuessWhatGame(`游戏开始！${opponentInfo.name} 已经想好了一个词。`, 'system');
    logToGuessWhatGame(
      { player: opponentInfo, text: `【${opponentInfo.name}托着下巴想了想】第一个提示是... ${firstHint}` },
      'ai-turn',
    );
    inputEl.placeholder = '请根据提示进行猜测...';
    inputEl.disabled = false;
  }

  showScreen('guess-what-game-screen');
  renderGuessWhatGameScreen();
  inputEl.focus();
  const actionArea = document.getElementById('guess-what-action-area');
  if (actionArea) actionArea.style.display = 'flex';
}

/**
 * 【你说我猜】渲染游戏主界面
 */
function renderGuessWhatGameScreen() {
  const logContainer = document.getElementById('guess-what-game-log');
  logContainer.innerHTML = '';

  guessWhatGameState.gameLog.forEach(log => {
    const logEl = document.createElement('div');
    logEl.className = `guess-log-entry ${log.type}`;

    if (log.type === 'system') {
      logEl.textContent = log.message;
    } else {
      const avatarUrl = log.message.player.isUser
        ? state.qzoneSettings.avatar || defaultAvatar
        : log.message.player.avatar;
      logEl.innerHTML = `
                <img src="${avatarUrl}" class="avatar">
                <div class="bubble">
                    <div class="name">${log.message.player.name}</div>
                    <div>${log.message.text.replace(/\n/g, '<br>')}</div>
                </div>
            `;
    }
    logContainer.appendChild(logEl);
  });

  logContainer.scrollTop = logContainer.scrollHeight;
}

/**
 * 【你说我猜】添加一条游戏日志
 */
function logToGuessWhatGame(message, type = 'system') {
  guessWhatGameState.gameLog.push({ message, type });
  renderGuessWhatGameScreen();
}

/**
 * 【你说我猜 V5 | 裁判逻辑最终修复版】游戏主循环/引擎
 * @param {string} userInput - 用户刚刚的输入
 */
async function processGuessWhatTurn(userInput) {
  if (!guessWhatGameState.isActive) return;

  const inputEl = document.getElementById('guess-what-user-input');
  const userPlayer = { id: 'user', name: state.qzoneSettings.nickname || '我', isUser: true };
  const aiPlayer = guessWhatGameState.opponent;
  const currentMode = guessWhatGameState.mode;

  // 1. 记录并显示用户的行为
  logToGuessWhatGame({ player: userPlayer, text: userInput }, 'user-turn');

  // 2. 轮到AI行动，禁用输入框
  guessWhatGameState.currentTurn = 'ai';
  inputEl.placeholder = `等待 ${aiPlayer.name} 的回应...`;
  inputEl.disabled = true;
  renderGuessWhatGameScreen();
  await sleep(1500);

  // 3. 让AI根据上下文执行动作
  const aiResponse = await triggerGuessWhatAiAction(
    currentMode === 'ai_guesses' ? 'guess_word' : 'give_hint',
    userInput,
  );

  // 4. 【核心修复】使用 switch 结构清晰地处理AI的每一种行动结果
  if (aiResponse) {
    switch (aiResponse.type) {
      case 'guess':
        const guessText = aiResponse.text;
        // 先把AI的猜测显示出来
        logToGuessWhatGame({ player: aiPlayer, text: guessText }, 'ai-turn');

        // 调用裁判函数进行判断
        if (isGuessCorrect(guessText, guessWhatGameState.secretWord)) {
          await sleep(1000); // 停顿一下，让玩家看到猜测内容
          endGuessWhatGame('ai', `我猜对啦！答案就是【${guessWhatGameState.secretWord}】！`);
          return; // 猜对了，游戏结束，退出函数
        }
        // 如果没猜对，则不执行任何操作，流程会自然地走到最后，把控制权还给用户
        break;

      case 'hint':
        // AI给出新提示
        logToGuessWhatGame({ player: aiPlayer, text: aiResponse.text }, 'ai-turn');
        break;

      case 'game_over':
        // AI在给提示时直接判断用户猜对了
        endGuessWhatGame(aiResponse.winner, aiResponse.reason);
        return; // 游戏结束，退出函数

      case 'error':
        // AI返回了错误信息
        logToGuessWhatGame({ player: aiPlayer, text: aiResponse.text }, 'ai-turn');
        break;

      default:
        // 未知类型的回复，也记录下来
        logToGuessWhatGame({ player: aiPlayer, text: '我好像有点跑神了，我们说到哪了？' }, 'ai-turn');
        console.warn('收到了未知的AI行动类型:', aiResponse);
        break;
    }
  } else {
    // API调用彻底失败
    logToGuessWhatGame({ player: aiPlayer, text: '我...好像彻底断线了...' }, 'ai-turn');
  }

  // 5. 如果游戏没有结束，则轮到用户行动，恢复输入框
  guessWhatGameState.currentTurn = 'user';
  inputEl.placeholder = currentMode === 'ai_guesses' ? '请继续给出你的提示...' : '请根据提示继续猜测...';
  inputEl.disabled = false;
  inputEl.focus();
}

/**
 * 【你说我猜】游戏结束处理
 */
function endGuessWhatGame(winner, reason) {
  if (!guessWhatGameState.isActive) return; // 防止重复执行
  guessWhatGameState.isActive = false; // 标记游戏为非激活状态

  // 立即隐藏游戏中的输入区域
  const actionArea = document.getElementById('guess-what-action-area');
  if (actionArea) actionArea.style.display = 'none';

  // 生成复盘文本
  const summaryText = generateGuessWhatSummary(winner, reason);
  // 显示结算卡片
  showGuessWhatSummaryModal(summaryText);
}
/**
 * 【全新】判断AI的猜测是否正确（简单版）
 * @param {string} guess - AI猜测的词语
 * @param {string} answer - 正确答案
 * @returns {boolean}
 */
function isGuessCorrect(guess, answer) {
  if (!guess || !answer) return false;

  // 为了更宽松的匹配，我们都转为小写并去除空格
  const cleanGuess = guess.toLowerCase().replace(/\s+/g, '');
  const cleanAnswer = answer.toLowerCase().replace(/\s+/g, '');

  // 只要猜测包含了答案，或者答案包含了猜测，就认为正确
  // 例如：答案是“冰淇淋”，猜测“冰淇淋车”或“淇淋”，都算对
  return cleanGuess.includes(cleanAnswer) || cleanAnswer.includes(cleanGuess);
}

/**
 * 【你说我猜-AI核心 V4 | 铜墙铁壁版】调用AI执行游戏逻辑，内置强大的重试机制
 * @param {string} actionType - AI需要执行的动作: 'generate_word', 'give_hint', 'guess_word'
 * @param {string} userInput - 用户刚刚的输入
 * @returns {Promise<object|null>} - AI的行动结果
 */
async function triggerGuessWhatAiAction(actionType, userInput = null) {
  const { proxyUrl, apiKey, model } = state.apiConfig;
  if (!proxyUrl || !apiKey || !model) return null;

  // --- 这部分Prompt逻辑保持不变 ---
  const opponent = guessWhatGameState.opponent;
  const historyText = guessWhatGameState.gameLog
    .map(log =>
      log.type === 'system' ? `[系统提示: ${log.message}]` : `${log.message.player.name}: ${log.message.text}`,
    )
    .slice(-10)
    .join('\n');
  let systemPrompt = `# 你的任务\n你正在扮演角色“${opponent.name}”，人设是：“${opponent.persona}”。\n你正在和“${
    state.qzoneSettings.nickname || '我'
  }”玩“你说我猜”游戏。\n你的所有发言都【必须】严格符合你的人设和口吻，让整个过程像一次真实的聊天互动。\n\n# 游戏历史 (最近的对话)\n${historyText}\n`;
  switch (actionType) {
    case 'generate_word':
      systemPrompt += `# 你的行动指令\n1. 根据你的人设，想一个常见的、2-5个字的中文词语作为谜底。\n2. 为这个词语，给出你的【第一条】符合人设的、有趣的提示。\n3. 你的回复【必须且只能】是一个严格的JSON对象，包含 "secretWord" 和 "firstHint" 两个字段。\n\n# JSON输出格式示例:\n{"secretWord": "月亮", "firstHint": "【指了指天上】晚上才能看到的东西哦，圆圆的，亮亮的~"}`;
      break;
    case 'give_hint':
      systemPrompt += `# 游戏规则
你是出题人，你的谜底是【${guessWhatGameState.secretWord}】。
用户刚刚的猜测是：“${userInput}”。

# 你的行动指令
1.  首先判断用户的猜测是否正确。
2.  如果用户猜对了，游戏结束。
3.  如果用户猜错了，你【必须】根据用户的错误猜测，给出【下一条】新的、更具针对性的提示，引导他们。
4.  【【【人设扮演铁律】】】你的所有提示都【必须】符合你的人设和口吻，可以加入动作、表情、语气词，甚至可以对用户【笨笨的猜测进行一些俏皮的吐槽】，让游戏更有趣。
5.  你的回复【必须且只能】是一个严格的JSON对象。

# JSON输出格式
- 如果猜对了: \`{"type": "game_over", "winner": "user", "reason": "恭喜你猜对啦！就是【${guessWhatGameState.secretWord}】！"}\`
- 如果猜错了: \`{"type": "hint", "text": "【叹气】不对哦，再想想。提示是：[在这里写你的新提示]"}\``;
      break;

    // ▼▼▼ 请用这整块【修复后】的代码，替换掉旧的 case 'guess_word' 代码块 ▼▼▼
    case 'guess_word':
      systemPrompt += `# 游戏规则
你是猜题人，用户正在描述一个词语，你需要根据提示猜出这个词。
用户刚刚给你的新提示是：“${userInput}”。

# 你的行动指令
1.  综合分析【游戏历史】中用户给出的【所有提示】。
2.  根据所有线索，进行【一次】猜测。
3.  【【【人设扮演铁律】】】你的猜测【必须】符合你的人设和口吻。你可以加入你的思考过程、情绪，甚至可以【对用户的提示进行吐槽】。
4.  【【【趣味性指令】】】为了逗弄用户，你可以【故意给出一些有趣的、沾点边但明显错误的答案】，然后再给出你认为最可能的答案。但这只是偶尔的调剂，你的最终目的还是要猜对。
5.  【【【绝对禁止】】】你【不能】再向用户提问，你的任务是直接猜测。
6.  你的回复【必须且只能】是一个严格的JSON对象。

# JSON输出格式 (注意：你无法判断自己是否猜对，所以永远使用这个格式)
{"type": "guess", "text": "【假装恍-然大悟】哦~我知道了，是“电饭煲”对不对？...好吧好吧不逗你了，我猜是...[你的真实猜测]"}`;
      break;
    // ▲▲▲ 替换结束 ▲▲▲
  }

  // --- 【核心改造】带有智能重试的API请求逻辑 ---
  const maxRetries = 3;
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      const messagesForApi = [{ role: 'user', content: '请根据你在系统指令中读到的规则，立即开始你的行动。' }];
      const isGemini = proxyUrl === GEMINI_API_URL;
      const geminiConfig = toGeminiRequestData(model, apiKey, systemPrompt, messagesForApi, isGemini);

      const response = isGemini
        ? await fetch(geminiConfig.url, geminiConfig.data)
        : await fetch(`${proxyUrl}/v1/chat/completions`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${apiKey}` },
            body: JSON.stringify({
              model: model,
              messages: [{ role: 'system', content: systemPrompt }, ...messagesForApi],
              temperature: parseFloat(state.apiConfig.temperature) || 0.8,
              response_format: { type: 'json_object' },
            }),
          });

      // 智能判断错误类型
      if (!response.ok) {
        // 对于 4xx 类的客户端错误 (如 401 Unauthorized, 400 Bad Request)，通常重试无效，直接抛出。
        if (response.status >= 400 && response.status < 500) {
          const errorText = await response.text();
          throw new Error(`API客户端错误 (状态码 ${response.status}): ${errorText}`);
        }
        // 对于 5xx 服务器错误或 429 速率限制，是可重试的。
        throw new Error(`API服务器临时错误 (状态码 ${response.status})`);
      }

      const data = await response.json();
      const content = (isGemini ? data.candidates[0].content.parts[0].text : data.choices[0].message.content).replace(
        /^```json\s*|```$/g,
        '',
      );
      return JSON.parse(content); // **成功，直接返回结果，跳出循环**
    } catch (error) {
      console.error(`“你说我猜”AI行动[${actionType}]失败 (第 ${attempt}/${maxRetries} 次尝试):`, error.message);

      // 如果是最后一次尝试，或者是一个不可重试的错误，则跳出循环准备返回最终失败信息
      if (attempt === maxRetries || error.message.includes('API客户端错误')) {
        break;
      }

      // 等待一段时间再重试（比如 1.5s, 3s, 4.5s）
      await sleep(1500 * attempt);
    }
  }

  // --- 所有重试都失败后的最终处理 ---
  console.error(`“你说我猜”AI行动[${actionType}]在所有尝试后均失败。`);
  // 根据失败的阶段，返回一个特定的错误对象
  if (actionType === 'generate_word') {
    return { secretWord: null, firstHint: null };
  }
  // 返回一个全新的 'error' 类型，让游戏主循环知道如何处理
  return { type: 'error', text: '【叹了口气】抱歉，我的网络好像出问题了，试了好几次都没连上...' };
}
// ▼▼▼ 【全新】“你说我猜”游戏结算与转发功能核心代码 ▼▼▼

/**
 * 【你说我猜】生成游戏复盘的文本
 * @param {string} winner - 胜利者 ('user' or 'ai')
 * @param {string} reason - 游戏结束原因
 * @returns {string} 格式化后的复盘Markdown文本
 */
function generateGuessWhatSummary(winner, reason) {
  let summaryText = `**你说我猜 - 游戏复盘**\n\n`;
  summaryText += `**游戏结果:** ${reason}\n`;
  summaryText += `**谜底:** ${guessWhatGameState.secretWord}\n\n`;
  summaryText += `**参与玩家:** 我, ${guessWhatGameState.opponent.name}\n\n`;
  summaryText += `---\n\n**游戏记录:**\n`;

  const formattedLog = guessWhatGameState.gameLog
    .map(log => {
      if (log.type === 'system') {
        return `[系统提示: ${log.message}]`;
      } else {
        return `${log.message.player.name}: ${log.message.text}`;
      }
    })
    .join('\n');

  summaryText += formattedLog;

  return summaryText;
}

/**
 * 【你说我猜】显示游戏结算卡片模态框
 * @param {string} summaryText - 复盘文本
 */
function showGuessWhatSummaryModal(summaryText) {
  const modal = document.getElementById('guess-what-summary-modal');
  const contentEl = document.getElementById('guess-what-summary-content');

  contentEl.innerHTML = renderMarkdown(summaryText);

  // 使用克隆节点技巧，防止事件重复绑定
  const forwardBtn = document.getElementById('forward-guess-what-summary-btn');
  const newForwardBtn = forwardBtn.cloneNode(true);
  forwardBtn.parentNode.replaceChild(newForwardBtn, forwardBtn);

  const closeBtn = document.getElementById('close-guess-what-summary-btn');
  const newCloseBtn = closeBtn.cloneNode(true);
  closeBtn.parentNode.replaceChild(newCloseBtn, closeBtn);

  // 检查对手是否是主要角色（有独立聊天窗口），而不是NPC
  const opponentId = guessWhatGameState.opponent.id;
  const canForward = state.chats[opponentId] !== undefined;

  if (canForward) {
    newForwardBtn.style.display = 'block';
    newForwardBtn.onclick = () => forwardGuessWhatSummary(summaryText);
  } else {
    // 如果对手是NPC，没有独立聊天窗口，则隐藏转发按钮
    newForwardBtn.style.display = 'none';
  }

  newCloseBtn.onclick = () => {
    modal.classList.remove('visible');
    showScreen('game-hall-screen');
  };

  modal.classList.add('visible');
}

/**
 * 【你说我猜】将游戏复盘转发到对应的AI角色的聊天中
 * @param {string} summaryText - 复盘文本
 */
async function forwardGuessWhatSummary(summaryText) {
  const opponentId = guessWhatGameState.opponent.id;
  const chat = state.chats[opponentId];

  if (!chat) {
    await showCustomAlert('转发失败', '找不到该玩家的聊天窗口。');
    return;
  }

  document.getElementById('guess-what-summary-modal').classList.remove('visible');

  // 创建对用户可见的复盘消息
  const visibleMessage = {
    role: 'user',
    type: 'text',
    timestamp: Date.now(),
    content: summaryText,
  };

  // 创建给AI看的隐藏指令
  const aiContext = `[系统指令：刚刚结束了一局“你说我猜”，这是游戏复盘。请根据这个复盘内容，以你的角色人设，和用户聊聊刚才的游戏。]\n\n${summaryText}`;
  const hiddenInstruction = {
    role: 'system',
    content: aiContext,
    timestamp: Date.now() + 1,
    isHidden: true,
  };

  chat.history.push(visibleMessage, hiddenInstruction);
  await db.chats.put(chat);

  await showCustomAlert('转发成功', `游戏复盘已发送至与“${chat.name}”的聊天中！`);

  // 打开聊天并触发AI回应
  openChat(chat.id);
  triggerAiResponse();
}

// ▲▲▲ 新增代码粘贴结束 ▲▲▲
// ▼▼▼ 【全新】这是“心动飞行棋”的所有核心功能函数 ▼▼▼
/**
 * 【全新】导出指定的飞行棋问题库
 * @param {number} bankId - 要导出的问题库的ID
 */
async function exportLudoQuestionBank(bankId) {
  try {
    const bank = await db.ludoQuestionBanks.get(bankId);
    const questions = await db.ludoQuestions.where('bankId').equals(bankId).toArray();

    if (!bank) {
      alert('错误：找不到要导出的题库。');
      return;
    }

    // 1. 准备要导出的数据结构，只包含纯粹的数据
    const exportData = {
      bankName: bank.name,
      questions: questions.map(q => ({
        text: q.text,
        type: q.type,
      })),
    };

    // 2. 将数据转换为格式化的JSON字符串
    const jsonString = JSON.stringify(exportData, null, 2);

    // 3. 创建Blob对象
    const blob = new Blob([jsonString], { type: 'application/json' });

    // 4. 创建并触发下载链接
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    const dateStr = new Date().toISOString().split('T')[0];
    link.href = url;
    link.download = `[飞行棋题库]${bank.name}-${dateStr}.json`;
    document.body.appendChild(link);
    link.click();

    // 5. 清理临时创建的对象
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    await showCustomAlert('导出成功', `问题库“${bank.name}”已成功导出！`);
  } catch (error) {
    console.error('导出飞行棋题库失败:', error);
    await showCustomAlert('导出失败', `发生了一个错误: ${error.message}`);
  }
}

/**
 * 【全新】处理导入的飞行棋问题库文件
 * @param {File} file - 用户选择的JSON文件
 */
async function importLudoQuestionBank(file) {
  if (!file) return;

  const reader = new FileReader();
  reader.onload = async e => {
    try {
      const text = e.target.result;
      const data = JSON.parse(text);

      // 1. 验证文件格式
      if (!data.bankName || !Array.isArray(data.questions)) {
        throw new Error("文件格式无效。必须包含 'bankName' 和 'questions' 数组。");
      }

      // 2. 检查题库名称是否已存在
      let newBankName = data.bankName;
      const existingBank = await db.ludoQuestionBanks.where('name').equals(newBankName).first();
      if (existingBank) {
        newBankName = `${newBankName} (导入)`; // 如果重名，自动添加后缀
      }

      // 3. 创建新的题库
      const newBankId = await db.ludoQuestionBanks.add({ name: newBankName });

      // 4. 准备要批量添加的新问题
      const questionsToAdd = data.questions.map(q => ({
        bankId: newBankId,
        text: q.text,
        type: q.type || 'both_answer', // 兼容旧的没有type的题库
      }));

      // 5. 如果有问题，就批量添加到数据库
      if (questionsToAdd.length > 0) {
        await db.ludoQuestions.bulkAdd(questionsToAdd);
      }

      // 6. 刷新UI并给出提示
      await renderLudoQuestionBanks();
      await showCustomAlert('导入成功', `问题库“${newBankName}”已成功导入，包含 ${questionsToAdd.length} 个问题！`);
    } catch (error) {
      console.error('导入飞行棋题库失败:', error);
      await showCustomAlert('导入失败', `无法解析文件，请确保它是正确的题库备份文件。\n\n错误: ${error.message}`);
    }
  };
  reader.readAsText(file, 'UTF-8');
}

/**
 * 【飞行棋】打开游戏设置界面 (V2 - 复选框版)
 */
async function openLudoSetup() {
  showScreen('ludo-setup-screen');
  const selectionEl = document.getElementById('ludo-player-selection');
  selectionEl.innerHTML = '<p>正在加载角色列表...</p>';

  // 【核心修改】为了保持统一，我们在这里也加载NPC作为可选玩伴
  const singleChats = Object.values(state.chats).filter(chat => !chat.isGroup);
  const allNpcs = Object.values(state.chats).flatMap(chat =>
    (chat.npcLibrary || []).map(npc => ({ ...npc, owner: chat.name })),
  );
  let playerOptions = [
    ...singleChats.map(c => ({ id: c.id, name: c.name, avatar: c.settings.aiAvatar, type: '角色' })),
    ...allNpcs.map(n => ({ id: n.id, name: n.name, avatar: n.avatar, type: `NPC (${n.owner})` })),
  ];

  selectionEl.innerHTML = '';
  if (playerOptions.length === 0) {
    selectionEl.innerHTML = '<p style="text-align:center; color: var(--text-secondary);">还没有可以一起玩的好友哦~</p>';
    return;
  }

  // 【核心修改1】渲染复选框列表
  playerOptions.forEach((player, index) => {
    const item = document.createElement('div');
    item.className = 'player-selection-item';
    item.innerHTML = `
            <input type="checkbox" class="ludo-player-checkbox" value="${player.id}" id="ludo-opponent-${player.id}" ${
      index === 0 ? 'checked' : ''
    }>
            <img src="${player.avatar || defaultAvatar}" alt="${player.name}">
            <span class="name">${player.name}</span>
            <span class="type-tag">${player.type}</span>
        `;
    selectionEl.appendChild(item);
  });

  // 【核心修改2】添加事件监听以实现单选
  selectionEl.addEventListener('click', e => {
    if (e.target.type === 'checkbox' && e.target.classList.contains('ludo-player-checkbox')) {
      document.querySelectorAll('.ludo-player-checkbox').forEach(cb => {
        if (cb !== e.target) cb.checked = false;
      });
    }
  });

  // 加载问题库到下拉框
  const bankSelect = document.getElementById('ludo-question-bank-select');
  bankSelect.innerHTML = '';
  const banks = await db.ludoQuestionBanks.toArray();
  if (banks.length === 0) {
    bankSelect.innerHTML = '<option value="">暂无可用题库</option>';
  } else {
    banks.forEach(bank => {
      const option = document.createElement('option');
      option.value = bank.id;
      option.textContent = bank.name;
      bankSelect.appendChild(option);
    });
  }
}

/**
 * 【飞行棋】开始游戏的核心逻辑 (V2 - 复选框版)
 */
async function startLudoGame() {
  // 【核心修改】修改选择器以匹配新的复选框class
  const selectedOpponentRadio = document.querySelector('.ludo-player-checkbox:checked');
  if (!selectedOpponentRadio) {
    alert('请选择一位玩伴！');
    return;
  }
  const opponentId = selectedOpponentRadio.value;
  const opponentChat =
    state.chats[opponentId] ||
    Object.values(state.chats)
      .flatMap(c => c.npcLibrary)
      .find(n => n.id === opponentId);

  const selectedBankId = parseInt(document.getElementById('ludo-question-bank-select').value);
  if (isNaN(selectedBankId)) {
    alert('请选择一个有效的问题库！');
    return;
  }

  // 查找对手的完整信息（和旧逻辑一样）
  let opponentInfo = null;
  const mainChat = Object.values(state.chats).find(c => c.id === opponentId);
  if (mainChat) {
    opponentInfo = { ...mainChat, persona: mainChat.settings.aiPersona, avatar: mainChat.settings.aiAvatar };
  } else {
    for (const c of Object.values(state.chats)) {
      const npc = (c.npcLibrary || []).find(n => n.id === opponentId);
      if (npc) {
        opponentInfo = npc;
        break;
      }
    }
  }
  if (!opponentInfo) {
    alert('找不到所选的玩伴信息！');
    return;
  }

  // 初始化游戏状态 (和旧逻辑一样)
  ludoGameState = {
    isActive: true,
    opponent: opponentInfo,
    players: [],
    currentTurnIndex: 0,
    gameLog: [],
    boardLayout: [],
    isDiceRolling: false,
    activeQuestionBankId: selectedBankId,
  };
  const userPlayer = {
    id: 'user',
    name: '你',
    avatar: state.qzoneSettings.avatar || defaultAvatar,
    piecePosition: -1,
    isUser: true,
  };
  const charPlayer = {
    id: opponentInfo.id,
    name: opponentInfo.name,
    avatar: opponentInfo.avatar || defaultAvatar,
    piecePosition: -1,
    isUser: false,
    persona: opponentInfo.persona,
  };
  if (Math.random() > 0.5) {
    ludoGameState.players = [userPlayer, charPlayer];
  } else {
    ludoGameState.players = [charPlayer, userPlayer];
  }
  ludoGameState.currentTurnIndex = 0;
  generateLudoBoard();
  showScreen('ludo-game-screen');
  renderLudoGameScreen();
  logToLudoGame('游戏开始！掷出6点即可起飞。', 'system');
  await sleep(1000);
  await processLudoTurn();
}

// 【已修复】请用下面这个函数完整替换你旧的 renderLudoGameScreen 函数
function renderLudoGameScreen(options = {}) {
  if (!ludoGameState.isActive) return;

  const userPieceEl = document.getElementById('ludo-user-piece');
  const charPieceEl = document.getElementById('ludo-char-piece');
  if (!userPieceEl || !charPieceEl) return;

  userPieceEl.style.backgroundImage = `url(${ludoGameState.players.find(p => p.isUser).avatar})`;
  charPieceEl.style.backgroundImage = `url(${ludoGameState.players.find(p => !p.isUser).avatar})`;

  ludoGameState.players.forEach(player => {
    const pieceEl = player.isUser ? userPieceEl : charPieceEl;
    const pos = player.piecePosition;

    if (pos === -1) {
      // 在起点
      const startCell = document.querySelector('.ludo-cell.start');
      // ▼▼▼ 核心修复1：加上 if (startCell) 的安全检查 ▼▼▼
      if (startCell) {
        pieceEl.style.left = `${startCell.offsetLeft + (player.isUser ? 0 : 5)}px`;
        pieceEl.style.top = `${startCell.offsetTop + (player.isUser ? 0 : 5)}px`;
      }
    } else if (pos >= LUDO_BOARD_SIZE) {
      // 已到终点
      const endCell = document.querySelector('.ludo-cell.end');
      // ▼▼▼ 核心修复2：加上 if (endCell) 的安全检查 ▼▼▼
      if (endCell) {
        pieceEl.style.left = `${endCell.offsetLeft + (player.isUser ? 0 : 5)}px`;
        pieceEl.style.top = `${endCell.offsetTop + (player.isUser ? 0 : 5)}px`;
      }
    } else {
      const cell = document.querySelector(`.ludo-cell[data-index="${pos}"]`);
      if (cell) {
        pieceEl.style.left = `${cell.offsetLeft + (player.isUser ? 0 : 5)}px`;
        pieceEl.style.top = `${cell.offsetTop + (player.isUser ? 0 : 5)}px`;
      }
    }
  });

  const logContainer = document.getElementById('ludo-game-log');
  logContainer.innerHTML = ludoGameState.gameLog
    .map(log => `<div class="log-entry ${log.type}">${log.message.replace(/\n/g, '<br>')}</div>`)
    .join('');
  logContainer.scrollTop = logContainer.scrollHeight;
}

/**
 * 【全新】飞行棋专用的用户输入函数
 * @param {string} promptText - 提示文字 (虽然我们没用上，但保留接口)
 * @param {string} placeholder - 输入框的占位文字
 * @returns {Promise<string>} - 返回用户的输入内容
 */
function waitForLudoUserAction(promptText, placeholder) {
  return new Promise(resolve => {
    const actionArea = document.getElementById('ludo-action-area');
    actionArea.innerHTML = ''; // 清空旧内容（比如骰子）
    actionArea.classList.add('speaking-mode'); // 复用剧本杀的发言样式

    const textarea = document.createElement('textarea');
    textarea.id = 'ludo-user-speech-input'; // 使用新ID，避免冲突
    textarea.rows = 1;
    textarea.placeholder = placeholder || '请输入你的回答...';

    // 实时调整高度
    textarea.addEventListener('input', () => {
      textarea.style.height = 'auto';
      textarea.style.height = textarea.scrollHeight + 'px';
    });

    const confirmBtn = document.createElement('button');
    confirmBtn.className = 'form-button'; // 使用通用按钮样式
    confirmBtn.textContent = '确认回答';

    actionArea.appendChild(textarea);
    actionArea.appendChild(confirmBtn);
    textarea.focus();

    confirmBtn.onclick = () => {
      const answer = textarea.value.trim() || '...（跳过）';
      actionArea.innerHTML = ''; // 清空输入框和按钮
      actionArea.classList.remove('speaking-mode');
      resolve(answer);
    };
  });
}
// ▲▲▲ 新代码粘贴结束 ▲▲▲

// ▼▼▼ 用这块【V2 - 支持新问题类型】的代码，完整替换你旧的 handleLudoQuestionEvent 函数 ▼▼▼
async function handleLudoQuestionEvent(player) {
  // 1. 根据游戏状态获取问题库
  const questionBankId = ludoGameState.activeQuestionBankId;
  let questions = [];
  if (questionBankId) {
    questions = await db.ludoQuestions.where('bankId').equals(questionBankId).toArray();
  }

  // 2. 如果题库是空的，提示并直接进入下一回合
  if (questions.length === 0) {
    logToLudoGame('当前题库是空的，跳过本轮问答。', 'system');
    await sleep(1500);
    await advanceTurn(); // 别忘了切换回合
    return;
  }

  // 3. 随机抽一个问题
  const questionObj = getRandomItem(questions);
  const questionText = questionObj.text;

  // 4. 【核心】弹出模式选择框，让用户决定怎么玩
  const mode = await showAnswerModeSelector(questionText);
  if (!mode) {
    logToLudoGame('玩家取消了答题，游戏继续。', 'system');
    await advanceTurn(); // 取消也要切换回合
    return;
  }

  // 5. 根据选择的模式，执行不同的流程
  logToLudoGame(
    `【${mode === 'both_answer' ? '共同回答' : '一人回答，一人评价'}】抽到的问题是：“${questionText}”`,
    'system',
  );
  await sleep(1500);

  const currentPlayer = player;
  const otherPlayer = ludoGameState.players.find(p => p.id !== currentPlayer.id);

  // --- 流程分支 ---
  if (mode === 'both_answer') {
    logToLudoGame(`请 <strong>${currentPlayer.name}</strong> 先回答。`, 'system');
    let answer1 = currentPlayer.isUser
      ? await waitForLudoUserAction('轮到你回答问题', '请输入你的回答...')
      : await triggerLudoAiAction('answer_question', { question: questionText });
    logToLudoGame(`<strong>${currentPlayer.name}:</strong> ${answer1}`, currentPlayer.isUser ? 'user' : 'char');
    await sleep(2000);

    logToLudoGame(`现在请 <strong>${otherPlayer.name}</strong> 回答。`, 'system');
    let answer2 = otherPlayer.isUser
      ? await waitForLudoUserAction('轮到你回答问题', '请输入你的回答...')
      : await triggerLudoAiAction('answer_question', { question: questionText });
    logToLudoGame(`<strong>${otherPlayer.name}:</strong> ${answer2}`, otherPlayer.isUser ? 'user' : 'char');
  } else if (mode === 'single_answer') {
    logToLudoGame(`请 <strong>${currentPlayer.name}</strong> 先回答。`, 'system');
    let answer = currentPlayer.isUser
      ? await waitForLudoUserAction('轮到你回答问题', '请输入你的回答...')
      : await triggerLudoAiAction('answer_question', { question: questionText });
    logToLudoGame(`<strong>${currentPlayer.name}:</strong> ${answer}`, currentPlayer.isUser ? 'user' : 'char');
    await sleep(2000);

    logToLudoGame(`现在请 <strong>${otherPlayer.name}</strong> 对Ta的回答发表一下看法吧。`, 'system');
    let evaluation = otherPlayer.isUser
      ? await waitForLudoUserAction(`对“${answer}”的看法`, '请输入你的评价...')
      : await triggerLudoAiAction('evaluate_answer', { question: questionText, answer: answer });
    logToLudoGame(`<strong>${otherPlayer.name}:</strong> ${evaluation}`, otherPlayer.isUser ? 'user' : 'char');
  }

  // 6. 问答流程结束后，提示并切换到下一回合
  await sleep(1500);
  logToLudoGame('本轮问答结束，游戏继续！', 'system');
  await advanceTurn();
}
// ▲▲▲ 替换结束 ▲▲▲

/**
 * 【飞行棋】添加一条游戏日志
 */
function logToLudoGame(message, type) {
  ludoGameState.gameLog.push({ message, type });
  renderLudoGameScreen();
}
// ▼▼▼ 在这里粘贴下面的新函数 ▼▼▼
/**
 * 【全新】一个带“魔法”的掷骰子函数
 * @param {object} player - 正在掷骰子的玩家对象
 * @returns {number} - 最终的骰子点数
 */
function rollTheDice(player) {
  // 如果玩家还在起点（没有起飞）
  if (player.piecePosition === -1) {
    // 就有50%的超高概率直接掷出6！
    if (Math.random() < 0.5) {
      return 6;
    }
    // 另外50%的概率，随机掷出1-5
    return Math.floor(Math.random() * 5) + 1;
  }
  // 如果已经起飞了，就恢复正常的公平骰子
  return Math.floor(Math.random() * 6) + 1;
}
// ▲▲▲ 新函数粘贴结束 ▲▲▲

/**
 * 【飞行棋】游戏主循环
 */
async function processLudoTurn() {
  if (!ludoGameState.isActive) return;

  const currentPlayer = ludoGameState.players[ludoGameState.currentTurnIndex];
  logToLudoGame(`轮到 <strong>${currentPlayer.name}</strong> 行动了。`, 'system');

  if (currentPlayer.isUser) {
    // 用户回合
    const actionArea = document.getElementById('ludo-action-area');
    actionArea.innerHTML = `
            <div id="ludo-dice-container" title="点击掷骰子">
                <div class="dice">
                    <div class="face front">1</div><div class="face back">6</div>
                    <div class="face right">3</div><div class="face left">4</div>
                    <div class="face top">2</div><div class="face bottom">5</div>
                </div>
            </div>
        `;
    document.getElementById('ludo-dice-container').onclick = handleUserRollDice;
  } else {
    // AI回合
    document.getElementById('ludo-action-area').innerHTML = `<p>${currentPlayer.name} 正在思考...</p>`;
    await sleep(2000);
    const diceRoll = rollTheDice(currentPlayer);
    await handlePlayerMove(currentPlayer, diceRoll, false);
  }
}

/**
 * 【飞行棋】处理用户掷骰子
 */
async function handleUserRollDice() {
  if (ludoGameState.isDiceRolling) return;
  ludoGameState.isDiceRolling = true;

  const diceEl = document.querySelector('.dice');
  diceEl.classList.add('rolling');
  document.getElementById('ludo-dice-container').onclick = null; // 防止重复点击

  const userPlayer = ludoGameState.players.find(p => p.isUser); // 先找到用户玩家对象
  const diceRoll = rollTheDice(userPlayer); // 调用新函数

  setTimeout(async () => {
    diceEl.classList.remove('rolling');
    // 根据点数旋转到对应面 (这是一个简化的视觉效果)
    const rotations = {
      1: 'rotateY(0deg)',
      2: 'rotateX(-90deg)',
      3: 'rotateY(-90deg)',
      4: 'rotateY(90deg)',
      5: 'rotateX(90deg)',
      6: 'rotateY(180deg)',
    };
    diceEl.style.transform = rotations[diceRoll];

    const userPlayer = ludoGameState.players.find(p => p.isUser);
    await handlePlayerMove(userPlayer, diceRoll, true);

    ludoGameState.isDiceRolling = false;
  }, 1500);
}

// ▼▼▼ 用这块【已修复】的代码，完整替换你旧的 handlePlayerMove 函数 ▼▼▼
async function handlePlayerMove(player, diceRoll, isUserMove) {
  logToLudoGame(
    `<strong>${player.name}</strong> 掷出了 <strong>${diceRoll}</strong> 点！`,
    isUserMove ? 'user' : 'char',
  );

  if (player.piecePosition === -1) {
    // 如果棋子还在起点
    if (diceRoll === 6) {
      player.piecePosition = 0; // 起飞到第0格
      logToLudoGame(`<strong>${player.name}</strong> 的棋子起飞了！`, 'system');
      renderLudoGameScreen();

      if (!isUserMove) {
        await triggerLudoAiAction('roll_6');
      }
      logToLudoGame(`掷出6点，<strong>${player.name}</strong> 再行动一次。`, 'system');
      await sleep(1000);
      await processLudoTurn(); // 重新执行当前玩家的回合
    } else {
      logToLudoGame('点数不是6，无法起飞。', 'system');
      await advanceTurn(); // 切换到下一位玩家
    }
    return; // 结束本次移动处理
  }

  // --- ▼▼▼ 核心修复从这里开始 ▼▼▼ ---

  const newPosition = player.piecePosition + diceRoll;
  const finalPositionIndex = LUDO_BOARD_SIZE - 1; // 终点格子的索引

  // 1. 【核心修改】只要新位置大于或等于终点，就直接判定胜利！
  if (newPosition >= finalPositionIndex) {
    player.piecePosition = finalPositionIndex; // 无论掷出几点，都让棋子停在终点格子上
    renderLudoGameScreen();
    logToLudoGame(`🎉 <strong>${player.name}</strong> 到达了终点！`, 'system');
    await triggerLudoAiAction(isUserMove ? 'user_win' : 'char_win');
    ludoGameState.isActive = false;
    document.getElementById('ludo-action-area').innerHTML = '';
    await sleep(1000);
    showLudoSummary(player.name); // 显示结算界面
    return; // 游戏结束，直接返回
  }
  // 2. 如果不是胜利，就正常移动
  else {
    player.piecePosition = newPosition;
  }

  // --- ▲▲▲ 核心修复到这里结束 ▲▲▲ ---

  renderLudoGameScreen();
  await sleep(500);

  // 检查是否踩到对方棋子
  const opponent = ludoGameState.players.find(p => p.id !== player.id);
  if (player.piecePosition === opponent.piecePosition && opponent.piecePosition !== -1) {
    opponent.piecePosition = -1; // 将对方棋子送回起点
    logToLudoGame(`💥 <strong>${player.name}</strong> 踩中了 <strong>${opponent.name}</strong>！`, 'system');
    renderLudoGameScreen();
    await triggerLudoAiAction(isUserMove ? 'kick_char' : 'kick_user');
    await sleep(1000);
  }

  // ▼▼▼ 请用这块【新代码】替换旧的“检查是否踩到事件格子”的 if 语句块 ▼▼▼

  // 检查是否踩到事件格子
  const cellIndex = ludoGameState.boardLayout.findIndex(c => c && c.index === player.piecePosition);
  if (cellIndex > -1 && ludoGameState.boardLayout[cellIndex].event) {
    const cellData = ludoGameState.boardLayout[cellIndex];
    const eventType = cellData.event;
    if (eventType === 'question') {
      // 【核心修改】将格子上的问题对象，直接传给处理函数
      await handleLudoQuestionEvent(player, cellData.question);
      return;
    }
  }
  // ▲▲▲ 替换结束 ▲▲▲

  // 如果掷出6点，再行动一次
  if (diceRoll === 6) {
    if (!isUserMove) {
      await triggerLudoAiAction('roll_6');
    }
    logToLudoGame(`掷出6点，<strong>${player.name}</strong> 再行动一次。`, 'system');
    await sleep(1000);
    await processLudoTurn();
  } else {
    await advanceTurn(); // 否则切换到下一位玩家
  }
}
// ▲▲▲ 替换结束 ▲▲▲

/**
 * 【飞行棋】推进到下一个回合
 */
async function advanceTurn() {
  ludoGameState.currentTurnIndex = (ludoGameState.currentTurnIndex + 1) % ludoGameState.players.length;
  await processLudoTurn();
}

// ▼▼▼ 用这块【优化后】的代码，完整替换你旧的 triggerLudoAiAction 函数 ▼▼▼
async function triggerLudoAiAction(eventType, context = {}) {
  const aiPlayer = ludoGameState.players.find(p => !p.isUser);
  const userPlayer = ludoGameState.players.find(p => p.isUser);

  const eventPrompts = {
    roll_6: '你掷出了6点，可以再行动一次！',
    kick_char: '你刚刚把我踢回了起点！',
    kick_user: '我刚刚把你的棋子踢回了起点！',
    char_win: '我赢得了这场游戏！',
    user_win: '你赢得了这场游戏！',
  };

  let eventPrompt = eventPrompts[eventType] || '请根据当前情况自由发挥。';

  // --- ▼▼▼ 核心修改1：为不同的问答场景提供更详细的指令 ▼▼▼ ---
  if (eventType === 'answer_question') {
    eventPrompt = `现在请根据你的人设，详细回答这个问题：“${context.question}”`;
  } else if (eventType === 'evaluate_answer') {
    eventPrompt = `对于问题“${context.question}”，对方的回答是：“${context.answer}”。现在请你以你的角色身份，对这个回答详细地发表一下看法或感受。`;
  }

  const systemPrompt = `
# 角色扮演指令
你正在和你的伴侣(${userPlayer.name})玩一场心动的线上飞行棋游戏。
你的名字是"${aiPlayer.name}"，你的人设是：${aiPlayer.persona}
你的回复必须完全符合你的人设，自然地表达你的情绪。

# 游戏当前状态
- 你的棋子位置: ${aiPlayer.piecePosition}
- 对方的棋子位置: ${userPlayer.piecePosition}
- 当前回合: 轮到 ${ludoGameState.players[ludoGameState.currentTurnIndex].name}

# 刚刚发生的事件
${eventPrompt}

# 你的任务
根据以上所有信息，生成一段符合你人设的回应。你的回应可以包含动作、心理活动和对话，让互动更生动，要非常的贴合你的人设，以人设为主。

# 输出格式
你的回复【必须且只能】是一个严格的JSON对象，格式如下:
{"speech": "你的回应..."}
`;

  try {
    const { proxyUrl, apiKey, model } = state.apiConfig;
    let isGemini = proxyUrl === GEMINI_API_URL;
    let messagesForApi = [{ role: 'user', content: systemPrompt }];
    let geminiConfig = toGeminiRequestData(
      model,
      apiKey,
      systemPrompt,
      messagesForApi,
      isGemini,
      state.apiConfig.temperature,
    );

    const response = isGemini
      ? await fetch(geminiConfig.url, geminiConfig.data)
      : await fetch(`${proxyUrl}/v1/chat/completions`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${apiKey}` },
          body: JSON.stringify({
            model: model,
            messages: messagesForApi,
            temperature: parseFloat(state.apiConfig.temperature) || 0.8,
            response_format: { type: 'json_object' },
          }),
        });

    if (!response.ok) throw new Error(await response.text());
    const data = await response.json();
    const content = (isGemini ? data.candidates[0].content.parts[0].text : data.choices[0].message.content).replace(
      /^```json\s*|```$/g,
      '',
    );
    const aiResponse = JSON.parse(content);

    if (eventType === 'answer_question' || eventType === 'evaluate_answer') {
      return aiResponse.speech || '嗯...让我想想。';
    }

    if (aiResponse.speech) {
      logToLudoGame(`<strong>${aiPlayer.name}:</strong> ${aiResponse.speech}`, 'char');
    }
  } catch (error) {
    console.error('飞行棋AI响应失败:', error);
    if (eventType === 'answer_question' || eventType === 'evaluate_answer') {
      return '我...我不知道该怎么回答了。';
    }
  }
}
// ▲▲▲ 替换结束 ▲▲▲

// ▼▼▼ 【最终智能版 | 问题数量精确匹配】用这块代码，完整替换你旧的 generateLudoBoard 函数 ▼▼▼
/**
 * 【飞行棋】生成棋盘格子 (V4 - 问题数量精确匹配版)
 */
async function generateLudoBoard() {
  const boardEl = document.getElementById('ludo-board');
  boardEl.innerHTML = '';
  const pathCoordinates = [
    [0, 0],
    [1, 0],
    [2, 0],
    [3, 0],
    [4, 0],
    [5, 0],
    [6, 0],
    [7, 0],
    [8, 0],
    [9, 0],
    [9, 1],
    [9, 2],
    [8, 2],
    [7, 2],
    [6, 2],
    [5, 2],
    [4, 2],
    [3, 2],
    [2, 2],
    [1, 2],
    [0, 2],
    [0, 3],
    [0, 4],
    [1, 4],
    [2, 4],
    [3, 4],
    [4, 4],
    [5, 4],
    [6, 4],
    [7, 4],
    [8, 4],
    [9, 4],
    [9, 5],
    [8, 5],
    [7, 5],
    [6, 5],
    [5, 5],
    [4, 5],
    [3, 5],
    [2, 5],
    [1, 5],
    [0, 5],
  ];

  let cells = Array(60).fill(null);
  pathCoordinates.slice(0, LUDO_BOARD_SIZE).forEach((coord, i) => {
    const pos = coord[1] * 10 + coord[0];
    cells[pos] = { type: 'path', index: i };
  });

  cells[21] = { type: 'start', index: -1 };
  cells[38] = { type: 'end', index: LUDO_BOARD_SIZE };

  // --- ▼▼▼ 这就是本次的【核心修改】 ▼▼▼ ---

  // 1. 获取当前游戏选择的问题库ID
  const questionBankId = ludoGameState.activeQuestionBankId;
  let questionsInBank = [];

  // 2. 从数据库中加载该问题库的所有问题
  if (questionBankId) {
    questionsInBank = await db.ludoQuestions.where('bankId').equals(questionBankId).toArray();
  }

  // ▼▼▼ 请用这块【全新的代码】替换掉函数中从 “// 4. 筛选出所有可以放置问题的普通格子...” 开始的那一大段逻辑 ▼▼▼

  // 4. 筛选出所有可以放置问题的普通格子
  const availableCellIndices = [];
  cells.forEach((cellData, index) => {
    if (cellData && cellData.type === 'path' && cellData.index > 0) {
      availableCellIndices.push(index);
    }
  });

  // 5. 【核心修改】我们不再打乱问题库，而是打乱可用的格子索引！
  availableCellIndices.sort(() => Math.random() - 0.5);

  // 6. 确定要放置的问题数量，仍然是取问题数和可用格子数的最小值
  const questionCount = Math.min(questionsInBank.length, availableCellIndices.length);

  if (questionsInBank.length > availableCellIndices.length) {
    console.warn(
      `飞行棋警告：问题库中的问题数量(${questionsInBank.length})超过了棋盘上的可用格子数量(${availableCellIndices.length})，部分问题将不会出现。`,
    );
  }

  // 7. 将问题库里的问题，按顺序放置到【被打乱顺序】的格子里
  for (let i = 0; i < questionCount; i++) {
    // 这次我们是从被打乱的格子列表里取出一个随机的格子
    const cellIndexToModify = availableCellIndices[i];
    // 然后按顺序从问题库里拿一个问题放上去
    const questionToPlace = questionsInBank[i];

    if (cells[cellIndexToModify]) {
      cells[cellIndexToModify].event = 'question';
      cells[cellIndexToModify].question = questionToPlace;
    }
  }
  // ▲▲▲ 替换结束 ▲▲▲

  ludoGameState.boardLayout = cells;

  // 后续的渲染逻辑保持不变...
  cells.forEach((cellData, i) => {
    if (cellData) {
      const cellEl = document.createElement('div');
      cellEl.className = 'ludo-cell';

      if (cellData.type === 'path') {
        cellEl.dataset.index = cellData.index;
        cellEl.innerHTML = `<span class="cell-number">${cellData.index + 1}</span>`;
      }
      if (cellData.type === 'start') {
        cellEl.classList.add('start');
        cellEl.innerHTML = '🏠';
      }
      if (cellData.type === 'end') {
        cellEl.classList.add('end');
        cellEl.innerHTML = '🏁';
      }
      if (cellData.event === 'question') {
        cellEl.classList.add(`event-truth`);
        cellEl.innerHTML += '❓';
      }

      const position = ludoGameState.boardLayout.indexOf(cellData);
      const row = Math.floor(position / 10);
      const col = position % 10;
      cellEl.style.gridRowStart = row + 1;
      cellEl.style.gridColumnStart = col + 1;

      boardEl.appendChild(cellEl);
    }
  });
}
// ▲▲▲ 替换结束 ▲▲▲

// ▼▼▼ 把这一整块全新的功能函数，粘贴到 init() 函数的【正上方】 ▼▼▼

// ▼▼▼ 用这整块新代码，替换掉所有旧的飞行棋问题库核心函数 ▼▼▼

/* --- 【全新 | V2分类版】飞行棋问题库功能核心函数 --- */

let activeQuestionBankId = null; // 用于追踪正在编辑的问题库ID
let editingQuestionId = null; // 用于追踪正在编辑的问题ID

// ▼▼▼ 用这块【已修复】的代码，完整替换你旧的 migrateDefaultLudoQuestions 函数 ▼▼▼
/**
 * 【数据迁移】在首次加载时，将旧的硬编码问题迁移到数据库
 */
async function migrateDefaultLudoQuestions() {
  const defaultBankName = '默认题库';
  const existingBank = await db.ludoQuestionBanks.where('name').equals(defaultBankName).first();
  // 如果“默认题库”已经存在，就说明迁移过了，直接返回
  if (existingBank) return;

  console.log('正在迁移飞行棋默认问题到数据库...');

  // 创建默认题库
  const bankId = await db.ludoQuestionBanks.add({ name: defaultBankName });

  // ★★★ 核心修改：将问题库改为对象数组，并为每个问题添加类型 ★★★
  const defaultQuestions = [
    // --- 类型1: 共同回答 (双方都需要回答) ---
    { type: 'both_answer', text: '如果我们一起去旅行，你最想去哪里，为什么？' },
    { type: 'both_answer', text: '你认为一段完美的关系中，最不可或缺的三个要素是什么？' },
    { type: 'both_answer', text: '分享一件最近因为我而让你感到心动或开心的小事。' },
    { type: 'both_answer', text: '回忆一下，我们第一次见面时，你对我的第一印象是什么？' },
    { type: 'both_answer', text: '如果我们可以一起学习一项新技能，你希望是什么？' },
    { type: 'both_answer', text: '描述一个你最希望和我一起度过的完美周末。' },
    { type: 'both_answer', text: '你觉得我们之间最有默契的一件事是什么？' },
    { type: 'both_answer', text: '如果用一种动物来形容我，你觉得是什么？为什么？' },
    { type: 'both_answer', text: '在未来的一年里，你最想和我一起完成的一件事是什么？' },
    { type: 'both_answer', text: '分享一部你最近很喜欢、并且想推荐给我一起看的电影或剧。' },
    { type: 'both_answer', text: '我们下次约会，你希望穿什么风格的衣服？' },

    // --- 类型2: 一人回答，对方评价 ---
    { type: 'single_answer', text: '描述一下我最让你心动的一个瞬间。' },
    { type: 'single_answer', text: '诚实地说，我做的哪件事曾经让你偷偷生过气？' },
    { type: 'single_answer', text: '如果我有一种超能力，你希望是什么？' },
    { type: 'single_answer', text: '给我三个最贴切的标签。' },
    { type: 'single_answer', text: '在你心里，我的形象和你的理想型有多接近？' },
    { type: 'single_answer', text: '分享一个你觉得我可能不知道的，关于你的小秘密。' },
    { type: 'single_answer', text: '如果我们的故事是一首歌，你觉得歌名应该叫什么？' },
    { type: 'single_answer', text: '说一件你觉得我做得比你好/更擅长的事情。' },
    { type: 'single_answer', text: '如果可以回到我们认识的任意一天，你会选择哪一天，想做什么？' },
    { type: 'single_answer', text: '用三个词来形容你眼中的我们的关系。' },
  ];

  const questionsToAdd = defaultQuestions.map(q => ({
    bankId: bankId,
    text: q.text,
    type: q.type, // <-- 关键修复：把类型也存进去！
  }));

  await db.ludoQuestions.bulkAdd(questionsToAdd);
  console.log(`成功迁移了 ${questionsToAdd.length} 条默认问题。`);
}
// ▲▲▲ 替换结束 ▲▲▲

/**
 * 打开问题库管理弹窗
 */
async function openLudoQuestionBankManager() {
  await renderLudoQuestionBanks();
  document.getElementById('ludo-qbank-manager-modal').classList.add('visible');
}

/**
 * 渲染问题库列表
 */
async function renderLudoQuestionBanks() {
  const listEl = document.getElementById('ludo-qbank-list');
  listEl.innerHTML = '';
  const banks = await db.ludoQuestionBanks.toArray();

  if (banks.length === 0) {
    listEl.innerHTML =
      '<p style="text-align:center; color: var(--text-secondary); padding: 50px 0;">还没有问题库，点击右上角“新建”创建一个吧！</p>';
  } else {
    banks.forEach(bank => {
      const item = document.createElement('div');
      item.className = 'list-item';
      item.innerHTML = `<div class="item-title">${bank.name}</div>`;
      item.addEventListener('click', () => openLudoQuestionEditor(bank.id, bank.name));
      addLongPressListener(item, async () => {
        // ▼▼▼ 核心修改在这里：在菜单里增加一个 'export' 选项 ▼▼▼
        const choice = await showChoiceModal(`操作“${bank.name}”`, [
          { text: '✏️ 重命名', value: 'rename' },
          { text: '📤 导出', value: 'export' }, // <-- 新增的导出选项
          { text: '🗑️ 删除', value: 'delete', isDanger: true },
        ]);

        if (choice === 'rename') {
          const newName = await showCustomPrompt('重命名问题库', '请输入新的名称：', bank.name);
          if (newName && newName.trim()) {
            await db.ludoQuestionBanks.update(bank.id, { name: newName.trim() });
            await renderLudoQuestionBanks();
          }
        } else if (choice === 'export') {
          // ▼▼▼ 在这里调用我们新写的导出函数 ▼▼▼
          await exportLudoQuestionBank(bank.id);
        } else if (choice === 'delete') {
          const confirmed = await showCustomConfirm(
            '确认删除',
            `确定要删除问题库“${bank.name}”吗？这将同时删除库内所有问题。`,
            { confirmButtonClass: 'btn-danger' },
          );
          if (confirmed) {
            await db.transaction('rw', db.ludoQuestionBanks, db.ludoQuestions, async () => {
              await db.ludoQuestions.where('bankId').equals(bank.id).delete();
              await db.ludoQuestionBanks.delete(bank.id);
            });
            await renderLudoQuestionBanks();
          }
        }
      });
      listEl.appendChild(item);
    });
  }
}

/**
 * 添加一个新的问题库
 */
async function addNewLudoQuestionBank() {
  const name = await showCustomPrompt('新建问题库', '请输入问题库的名称：');
  if (name && name.trim()) {
    await db.ludoQuestionBanks.add({ name: name.trim() });
    await renderLudoQuestionBanks();
  }
}

/**
 * 打开指定问题库的问题编辑器
 */
async function openLudoQuestionEditor(bankId, bankName) {
  activeQuestionBankId = bankId;
  document.getElementById('ludo-question-editor-title').textContent = `编辑 - ${bankName}`;
  await renderLudoQuestionsInBank(bankId);
  document.getElementById('ludo-question-editor-modal').classList.add('visible');
}

/**
 * 渲染一个问题库中的所有问题
 */
async function renderLudoQuestionsInBank(bankId) {
  const listEl = document.getElementById('ludo-question-list');
  listEl.innerHTML = '';
  const questions = await db.ludoQuestions.where('bankId').equals(bankId).toArray();

  if (questions.length === 0) {
    listEl.innerHTML =
      '<p style="text-align:center; color: var(--text-secondary); padding: 50px 0;">这个题库还是空的，点击右上角“+”添加第一个问题吧！</p>';
  } else {
    questions.forEach(q => {
      const item = document.createElement('div');
      item.className = 'list-item';

      // ★★★ 核心修改：根据问题类型添加标签 ★★★
      const typeText = q.type === 'single_answer' ? '一人回答' : '共同回答';
      const typeClass = q.type === 'single_answer' ? 'single-answer' : 'both-answer';

      item.innerHTML = `
                <div class="item-title" style="white-space: normal; display: flex; align-items: center;">
                    <span>${q.text}</span>
                    <span class="question-type-tag ${typeClass}">${typeText}</span>
                </div>
            `;

      item.addEventListener('click', () => openSingleQuestionEditor(q.id));
      addLongPressListener(item, async () => {
        const confirmed = await showCustomConfirm('删除问题', '确定要删除这个问题吗？', {
          confirmButtonClass: 'btn-danger',
        });
        if (confirmed) {
          await db.ludoQuestions.delete(q.id);
          await renderLudoQuestionsInBank(bankId);
        }
      });
      listEl.appendChild(item);
    });
  }
}

/**
 * 打开单个问题编辑器（用于新建或编辑）
 */
async function openSingleQuestionEditor(questionId = null) {
  editingQuestionId = questionId;
  const modal = document.getElementById('ludo-single-question-editor-modal');
  const titleEl = document.getElementById('ludo-single-question-title');
  const textInput = document.getElementById('ludo-question-text-input');
  const typeRadios = document.querySelectorAll('input[name="ludo_question_type"]');

  if (questionId) {
    // 编辑模式
    const question = await db.ludoQuestions.get(questionId);
    if (!question) return;
    titleEl.textContent = '编辑问题';
    textInput.value = question.text;
    typeRadios.forEach(radio => (radio.checked = radio.value === (question.type || 'both_answer')));
  } else {
    // 新建模式
    titleEl.textContent = '添加新问题';
    textInput.value = '';
    typeRadios[0].checked = true; // 默认选中“共同回答”
  }

  modal.classList.add('visible');
}

/**
 * 保存单个问题（新建或更新）
 */
async function saveSingleQuestion() {
  const text = document.getElementById('ludo-question-text-input').value.trim();
  if (!text) {
    alert('问题内容不能为空！');
    return;
  }
  const type = document.querySelector('input[name="ludo_question_type"]:checked').value;

  if (editingQuestionId) {
    // 更新
    await db.ludoQuestions.update(editingQuestionId, { text, type });
  } else {
    // 新建
    await db.ludoQuestions.add({ bankId: activeQuestionBankId, text, type });
  }

  document.getElementById('ludo-single-question-editor-modal').classList.remove('visible');
  await renderLudoQuestionsInBank(activeQuestionBankId); // 刷新列表
  editingQuestionId = null;
}

// ▼▼▼ 请用这块【全新的函数】完整替换旧的 handleLudoQuestionEvent 函数 ▼▼▼

/**
 * 【飞行棋】处理踩中问题格子的事件 (V3 - 直接使用传入的问题)
 */
async function handleLudoQuestionEvent(player, questionObj) {
  // 1. 安全检查：如果因为某种原因没有拿到问题，就跳过
  if (!questionObj || !questionObj.text) {
    logToLudoGame('未找到问题，跳过本轮问答。', 'system');
    await sleep(1500);
    await advanceTurn();
    return;
  }

  // 2. 直接使用传入的问题对象，不再随机抽取
  const questionText = questionObj.text;
  const mode = questionObj.type || 'both_answer'; // 直接从问题对象获取模式

  logToLudoGame(
    `【${mode === 'both_answer' ? '共同回答' : '一人回答，一人评价'}】抽到的问题是：“${questionText}”`,
    'system',
  );
  await sleep(1500);

  const currentPlayer = player;
  const otherPlayer = ludoGameState.players.find(p => p.id !== currentPlayer.id);

  // --- 流程分支 (这部分逻辑保持不变) ---
  if (mode === 'both_answer') {
    logToLudoGame(`请 <strong>${currentPlayer.name}</strong> 先回答。`, 'system');
    let answer1 = currentPlayer.isUser
      ? await waitForLudoUserAction('轮到你回答问题', '请输入你的回答...')
      : await triggerLudoAiAction('answer_question', { question: questionText });
    logToLudoGame(`<strong>${currentPlayer.name}:</strong> ${answer1}`, currentPlayer.isUser ? 'user' : 'char');
    await sleep(2000);

    logToLudoGame(`现在请 <strong>${otherPlayer.name}</strong> 回答。`, 'system');
    let answer2 = otherPlayer.isUser
      ? await waitForLudoUserAction('轮到你回答问题', '请输入你的回答...')
      : await triggerLudoAiAction('answer_question', { question: questionText });
    logToLudoGame(`<strong>${otherPlayer.name}:</strong> ${answer2}`, otherPlayer.isUser ? 'user' : 'char');
  } else if (mode === 'single_answer') {
    logToLudoGame(`请 <strong>${currentPlayer.name}</strong> 回答这个问题。`, 'system');
    let answer = currentPlayer.isUser
      ? await waitForLudoUserAction('轮到你回答问题', '请输入你的回答...')
      : await triggerLudoAiAction('answer_question', { question: questionText });
    logToLudoGame(`<strong>${currentPlayer.name}:</strong> ${answer}`, currentPlayer.isUser ? 'user' : 'char');
    await sleep(2000);

    logToLudoGame(`现在请 <strong>${otherPlayer.name}</strong> 对Ta的回答发表一下看法吧。`, 'system');
    let evaluation = otherPlayer.isUser
      ? await waitForLudoUserAction(`对“${answer}”的看法`, '请输入你的评价...')
      : await triggerLudoAiAction('evaluate_answer', { question: questionText, answer: answer });
    logToLudoGame(`<strong>${otherPlayer.name}:</strong> ${evaluation}`, otherPlayer.isUser ? 'user' : 'char');
  }

  await sleep(1500);
  logToLudoGame('本轮问答结束，游戏继续！', 'system');
  await advanceTurn();
}
// ▲▲▲ 替换结束 ▲▲▲

/**
 * 【全新】显示飞行棋游戏结算卡片
 * @param {string} winnerName - 胜利者的名字
 */
function showLudoSummary(winnerName) {
  const modal = document.getElementById('ludo-summary-modal');
  const contentEl = document.getElementById('ludo-summary-content');

  // 1. 提取问答记录
  let qaLogHtml = '<h4>心动问答记录</h4>';
  const questionsAndAnswers = [];
  let currentQuestion = null;

  ludoGameState.gameLog.forEach(log => {
    // 通过识读系统日志里的特定文本来找到“问题”
    if (log.type === 'system' && log.message.includes('抽到的问题是')) {
      const questionText = log.message.match(/“(.+?)”/);
      if (questionText && questionText[1]) {
        currentQuestion = { question: questionText[1], answers: [] };
        questionsAndAnswers.push(currentQuestion);
      }
    }
    // 如果我们刚刚找到了一个问题，那么后续的用户或角色发言就是“回答”
    else if (currentQuestion && (log.type === 'user' || log.type === 'char') && !log.message.includes('掷出了')) {
      const answerText = log.message.replace(/<strong>.*?<\/strong>:\s*/, '');
      const speakerNameMatch = log.message.match(/<strong>(.*?)<\/strong>/);
      if (speakerNameMatch && speakerNameMatch[1]) {
        currentQuestion.answers.push({ speaker: speakerNameMatch[1], text: answerText });
      }
    }
  });

  // 2. 将提取出的问答记录格式化为HTML
  if (questionsAndAnswers.length > 0) {
    questionsAndAnswers.forEach((qa, index) => {
      qaLogHtml += `<div class="qa-item">
                <div class="qa-question">Q${index + 1}: ${qa.question}</div>`;
      qa.answers.forEach(ans => {
        qaLogHtml += `<div class="qa-answer"><strong>${ans.speaker}:</strong> ${ans.text}</div>`;
      });
      qaLogHtml += `</div>`;
    });
  } else {
    qaLogHtml += '<p>本局没有触发任何问答。</p>';
  }

  // 3. 拼接完整的结算卡片内容
  contentEl.innerHTML = `
        <h3>🎉 恭喜 ${winnerName} 获胜！ 🎉</h3>
        <div class="ludo-qa-log">${qaLogHtml}</div>
    `;

  // 4. 为按钮绑定事件 (使用克隆节点技巧防止重复绑定)
  const shareBtn = document.getElementById('share-ludo-summary-btn');
  const backBtn = document.getElementById('back-to-hall-from-ludo-btn');

  const newShareBtn = shareBtn.cloneNode(true);
  shareBtn.parentNode.replaceChild(newShareBtn, shareBtn);
  newShareBtn.onclick = () => {
    // 准备纯文本格式的复盘内容用于分享
    const summaryForShare =
      `飞行棋游戏结束啦！🎉\n\n胜利者: ${winnerName}\n\n--- 心动问答 ---\n` +
      questionsAndAnswers
        .map((qa, i) => `Q${i + 1}: ${qa.question}\n` + qa.answers.map(ans => `${ans.speaker}: ${ans.text}`).join('\n'))
        .join('\n\n');

    shareLudoSummary(summaryForShare, winnerName);
  };

  const newBackBtn = backBtn.cloneNode(true);
  backBtn.parentNode.replaceChild(newBackBtn, backBtn);
  newBackBtn.onclick = () => {
    modal.classList.remove('visible');
    showScreen('game-hall-screen');
  };

  // 5. 显示结算弹窗
  modal.classList.add('visible');
}

/**
 * 【全新】将飞行棋游戏复盘发送给对手
 * @param {string} summaryText - 要发送的复盘文本
 */
async function shareLudoSummary(summaryText, winnerName) {
  const opponentId = ludoGameState.opponent?.id;
  if (!opponentId) {
    alert('找不到对手信息，无法分享。');
    return;
  }

  const chat = state.chats[opponentId];
  if (!chat) {
    alert('找不到与对手的聊天窗口，无法分享。');
    return;
  }

  // 创建对用户可见的复盘消息
  const visibleMessage = {
    role: 'user',
    type: 'text',
    timestamp: Date.now(),
    content: summaryText,
  };

  // 创建给AI看的隐藏指令，让它可以就游戏结果发表感想
  const aiContext = `[系统指令：刚刚结束了一局飞行棋。重要：本次游戏的胜利者是【${winnerName}】。这是游戏复盘，请根据这个结果，以你的角色人设，和用户聊聊刚才的游戏。]\n\n${summaryText}`;
  const hiddenInstruction = {
    role: 'system',
    content: aiContext,
    timestamp: Date.now() + 1,
    isHidden: true,
  };

  chat.history.push(visibleMessage, hiddenInstruction);
  await db.chats.put(chat);

  // 关闭结算卡片
  document.getElementById('ludo-summary-modal').classList.remove('visible');

  await showCustomAlert('分享成功', `游戏复盘已发送至与“${chat.name}”的聊天中！`);

  // 跳转到聊天界面并让AI回应
  openChat(chat.id);
  triggerAiResponse();
}

// ▲▲▲ 新增代码粘贴结束 ▲▲▲
// ▼▼▼ 【全新】这是“谁是卧底”游戏的全部核心逻辑代码，请粘贴到 init() 函数前 ▼▼▼

/**
 * 【卧底】打开游戏设置界面
 */
async function openUndercoverSetup() {
  showScreen('undercover-setup-screen');
  const selectionEl = document.getElementById('undercover-player-selection');
  selectionEl.innerHTML = '<p>正在加载角色列表...</p>';

  // 复用狼人杀的玩家加载逻辑，非常方便
  const singleChats = Object.values(state.chats).filter(chat => !chat.isGroup);
  const allNpcs = Object.values(state.chats).flatMap(chat =>
    (chat.npcLibrary || []).map(npc => ({ ...npc, owner: chat.name })),
  );
  let playerOptions = [
    ...singleChats.map(c => ({ id: c.id, name: c.name, avatar: c.settings.aiAvatar, type: '角色' })),
    ...allNpcs.map(n => ({ id: n.id, name: n.name, avatar: n.avatar, type: `NPC (${n.owner})` })),
  ];

  selectionEl.innerHTML = '';
  if (playerOptions.length < 2) {
    selectionEl.innerHTML =
      '<p style="text-align:center; padding-top: 50px; color: var(--text-secondary);">你需要至少2位AI或NPC好友才能开始游戏哦。</p>';
    document.getElementById('start-undercover-game-btn').disabled = true;
    return;
  }

  document.getElementById('start-undercover-game-btn').disabled = false;
  playerOptions.forEach(player => {
    const item = document.createElement('div');
    item.className = 'player-selection-item';
    item.innerHTML = `
            <input type="checkbox" class="undercover-player-checkbox" value="${player.id}">
            <img src="${player.avatar || defaultAvatar}" alt="${player.name}">
            <span class="name">${player.name}</span>
            <span class="type-tag">${player.type}</span>
        `;
    selectionEl.appendChild(item);
  });
}

/**
 * 【卧底V2】开始游戏的核心逻辑 (支持手动/随机邀请)
 */
async function startUndercoverGame() {
  const inviteMode = document.querySelector('input[name="undercover_invite_mode"]:checked').value;
  let invitedPlayerInfos = [];
  let totalPlayers = 0;

  // --- 1. 根据邀请模式，收集被邀请的玩家信息 ---
  if (inviteMode === 'manual') {
    const selectedCheckboxes = document.querySelectorAll('.undercover-player-checkbox:checked');
    totalPlayers = selectedCheckboxes.length + 1;
    if (totalPlayers < 3) {
      alert(`游戏最少需要3人！当前手动选择了 ${selectedCheckboxes.length} 人。`);
      return;
    }
    selectedCheckboxes.forEach(checkbox => {
      const playerId = checkbox.value;
      const chat = Object.values(state.chats).find(c => c.id === playerId);
      if (chat) {
        invitedPlayerInfos.push({
          id: chat.id,
          name: chat.name,
          avatar: chat.settings.aiAvatar,
          persona: chat.settings.aiPersona,
          isUser: false,
        });
      } else {
        for (const c of Object.values(state.chats)) {
          const npc = (c.npcLibrary || []).find(n => n.id === playerId);
          if (npc) {
            invitedPlayerInfos.push({
              id: npc.id,
              name: npc.name,
              avatar: npc.avatar,
              persona: npc.persona,
              isUser: false,
            });
            break;
          }
        }
      }
    });
  } else {
    // 'random' mode
    const randomPlayerCount = parseInt(document.getElementById('undercover-random-player-count').value);
    if (isNaN(randomPlayerCount) || randomPlayerCount < 2) {
      alert('随机邀请人数至少为2人！');
      return;
    }
    totalPlayers = randomPlayerCount + 1;

    const singleChats = Object.values(state.chats).filter(chat => !chat.isGroup);
    const allNpcs = Object.values(state.chats).flatMap(chat =>
      (chat.npcLibrary || []).map(npc => ({ ...npc, owner: chat.name })),
    );
    let allAvailablePlayers = [
      ...singleChats.map(c => ({
        id: c.id,
        name: c.name,
        avatar: c.settings.aiAvatar,
        persona: c.settings.aiPersona,
        isUser: false,
      })),
      ...allNpcs.map(n => ({ id: n.id, name: n.name, avatar: n.avatar, persona: n.persona, isUser: false })),
    ];

    if (allAvailablePlayers.length < randomPlayerCount) {
      alert(`可用玩家不足！需要 ${randomPlayerCount} 人，但只有 ${allAvailablePlayers.length} 人可选。`);
      return;
    }

    allAvailablePlayers.sort(() => Math.random() - 0.5); // 洗牌
    invitedPlayerInfos = allAvailablePlayers.slice(0, randomPlayerCount); // 取出需要的人数
  }

  // --- 2. 重置并初始化游戏状态 ---
  undercoverGameState = {
    isActive: true,
    players: [],
    gamePhase: 'reveal_words',
    dayNumber: 1,
    gameLog: [],
    turnIndex: 0,
    votes: {},
    votedOutPlayers: [],
    tiedPlayers: [],
  };

  // --- 3. 让AI生成或从内置词库获取词语 ---
  let wordPair;
  try {
    wordPair = await generateUndercoverWordsAI();
  } catch (e) {
    await showCustomAlert('AI出题失败', '呜，AI今天没灵感了...将使用内置词库为你出题！');
    const BUILT_IN_WORDS = [
      { civilian: '牛奶', undercover: '豆浆' },
      { civilian: '白菜', undercover: '生菜' },
      { civilian: '饺子', undercover: '馄饨' },
      { civilian: '手套', undercover: '袜子' },
      { civilian: '情书', undercover: '遗书' },
    ];
    wordPair = getRandomItem(BUILT_IN_WORDS);
  }
  undercoverGameState.civilianWord = wordPair.civilian;
  undercoverGameState.undercoverWord = wordPair.undercover;

  // --- 4. 添加玩家到游戏状态 ---
  const userPlayer = {
    id: 'user',
    name: state.qzoneSettings.nickname || '我',
    avatar: state.qzoneSettings.avatar || defaultAvatar,
    isAlive: true,
    isUser: true,
  };
  undercoverGameState.players.push(userPlayer);
  invitedPlayerInfos.forEach(pInfo => {
    undercoverGameState.players.push({ ...pInfo, isAlive: true });
  });
  undercoverGameState.players.sort(() => Math.random() - 0.5); // 打乱座位顺序

  // --- 5. 分配角色和词语 ---
  let rolesToAssign = [];
  if (totalPlayers >= 3 && totalPlayers <= 5) {
    rolesToAssign.push('undercover');
  } else if (totalPlayers >= 6 && totalPlayers <= 8) {
    rolesToAssign.push('undercover');
    rolesToAssign.push('whiteboard');
  } else {
    rolesToAssign.push('undercover');
    rolesToAssign.push('undercover');
    rolesToAssign.push('whiteboard');
  }
  while (rolesToAssign.length < totalPlayers) {
    rolesToAssign.push('civilian');
  }
  rolesToAssign.sort(() => Math.random() - 0.5);

  undercoverGameState.players.forEach((player, index) => {
    const role = rolesToAssign[index];
    player.role = role;
    if (role === 'civilian') player.word = undercoverGameState.civilianWord;
    else if (role === 'undercover') player.word = undercoverGameState.undercoverWord;
    else if (role === 'whiteboard') player.word = null;
  });

  // --- 6. 切换到游戏界面并开始 ---
  showScreen('undercover-game-screen');
  await processUndercoverTurn();
}

// ▼▼▼ 【最终流程修复版】请用这整块代码，完整替换旧的 processUndercoverTurn 函数 ▼▼▼
/**
 * 【卧底】游戏主循环/引擎 (V3 - 已修复轮次卡死问题)
 */
async function processUndercoverTurn() {
  if (!undercoverGameState.isActive) return;

  renderUndercoverGameScreen();

  switch (undercoverGameState.gamePhase) {
    case 'reveal_words': {
      logToUndercoverGame(`游戏开始，第 ${undercoverGameState.dayNumber} 轮。请查看自己的词语。`, 'system');
      const me = undercoverGameState.players.find(p => p.isUser);
      const roleName = { undercover: '卧底', civilian: '平民', whiteboard: '白板' }[me.role] || '未知';
      const wordText = me.word ? `你的词语是：【${me.word}】` : '你是一个白板，需要根据他人描述猜测平民词语。';
      await showCustomAlert(`你的身份是：【${roleName}】`, wordText);

      undercoverGameState.gamePhase = 'description_round';
      await sleep(1000);
      await processUndercoverTurn();
      break;
    }

    case 'description_round': {
      logToUndercoverGame(`第 ${undercoverGameState.dayNumber} 轮发言开始，请依次描述自己的词语。`, 'system');

      const alivePlayers = undercoverGameState.players.filter(p => p.isAlive);
      for (const player of alivePlayers) {
        renderUndercoverGameScreen({ speakingPlayerId: player.id });
        let description;
        if (player.isUser) {
          description = await waitForUserUndercoverAction('轮到你发言', 'speak', {
            placeholder: '请用一句话描述你的词语...',
          });
        } else {
          description = await triggerUndercoverAiAction(player.id, 'describe');
        }
        logToUndercoverGame({ player: player, speech: description }, 'speech');
        await sleep(1000);
      }
      renderUndercoverGameScreen();
      undercoverGameState.gamePhase = 'voting_round';
      await sleep(1000);
      await processUndercoverTurn();
      break;
    }

    case 'voting_round': {
      logToUndercoverGame('描述结束，现在开始投票。', 'system');
      undercoverGameState.votes = {}; // 清空上一轮的票
      const alivePlayers = undercoverGameState.players.filter(p => p.isAlive);
      for (const voter of alivePlayers) {
        let voteResult;
        if (voter.isUser) {
          voteResult = await waitForUserUndercoverAction('请投票', 'vote');
        } else {
          voteResult = await triggerUndercoverAiAction(voter.id, 'vote');
        }

        if (voteResult && voteResult.voteForId) {
          const targetId = voteResult.voteForId;
          const reason = voteResult.reason || '未说明理由';
          const targetPlayer = undercoverGameState.players.find(p => p.id === targetId);

          if (targetPlayer) {
            logToUndercoverGame(
              `<strong>${voter.name}</strong> 投票给了 <strong>${targetPlayer.name}</strong>，理由是：“${reason}”`,
            );
            undercoverGameState.votes[targetId] = (undercoverGameState.votes[targetId] || 0) + 1;
          }
        } else {
          const reason = voteResult ? voteResult.reason || '信息不足，无法判断。' : '信息不足，无法判断。';
          logToUndercoverGame(`<strong>${voter.name}</strong> 弃票了，理由是：“${reason}”`);
        }
        await sleep(500);
      }

      undercoverGameState.gamePhase = 'elimination';
      await sleep(2000);
      await processUndercoverTurn();
      break;
    }

    case 'elimination': {
      logToUndercoverGame('投票结束，正在计票...', 'system');
      await sleep(2000);

      const voteCounts = undercoverGameState.votes;
      let maxVotes = 0;
      let playersToEliminate = [];

      for (const playerId in voteCounts) {
        if (voteCounts[playerId] > maxVotes) {
          maxVotes = voteCounts[playerId];
          playersToEliminate = [playerId];
        } else if (voteCounts[playerId] === maxVotes) {
          playersToEliminate.push(playerId);
        }
      }

      if (playersToEliminate.length > 1) {
        // 处理平票
        logToUndercoverGame(
          `出现平票: ${playersToEliminate
            .map(id => undercoverGameState.players.find(p => p.id === id).name)
            .join('、 ')}。`,
          'system',
        );
        logToUndercoverGame('平票玩家将进行补充发言，之后再次投票。', 'system');
        undercoverGameState.tiedPlayers = playersToEliminate;
        undercoverGameState.gamePhase = 'tie_vote_speech';
        await sleep(2000);
        await processUndercoverTurn();
        return;
      } else if (playersToEliminate.length === 1) {
        // 唯一最高票，淘汰
        const eliminatedPlayerId = playersToEliminate[0];
        const eliminatedPlayer = undercoverGameState.players.find(p => p.id === eliminatedPlayerId);
        eliminatedPlayer.isAlive = false;
        undercoverGameState.votedOutPlayers.push(eliminatedPlayer);
        const roleName = { undercover: '卧底', civilian: '平民', whiteboard: '白板' }[eliminatedPlayer.role] || '未知';
        logToUndercoverGame(`【${eliminatedPlayer.name}】被淘汰！他/她的身份是【${roleName}】。`, 'system');
      } else {
        // 无人被投
        logToUndercoverGame('本轮无人被投，无人出局。', 'system');
      }

      renderUndercoverGameScreen();
      if (checkUndercoverGameOver()) return;

      // ★★★ 核心修改：无论是否有人淘汰，都正确进入下一轮 ★★★
      undercoverGameState.dayNumber++;
      undercoverGameState.gamePhase = 'description_round';
      logToUndercoverGame('游戏继续...', 'system');
      await sleep(3000);
      await processUndercoverTurn();
      break;
    }

    case 'tie_vote_speech': {
      logToUndercoverGame('现在请平票玩家依次进行补充发言。', 'system');
      const tiedPlayers = undercoverGameState.players.filter(p => undercoverGameState.tiedPlayers.includes(p.id));
      for (const player of tiedPlayers) {
        if (!player.isAlive) continue;
        renderUndercoverGameScreen({ speakingPlayerId: player.id });
        let speech;
        if (player.isUser) {
          speech = await waitForUserUndercoverAction('请进行补充发言', 'speak', {
            placeholder: '为自己辩解，说服大家不要投你...',
          });
        } else {
          speech = await triggerUndercoverAiAction(player.id, 'tie_speak');
        }
        logToUndercoverGame({ player: player, speech: speech }, 'speech');
        await sleep(1000);
      }
      renderUndercoverGameScreen();
      undercoverGameState.gamePhase = 'tie_vote_re-vote';
      await processUndercoverTurn();
      break;
    }

    case 'tie_vote_re-vote': {
      logToUndercoverGame('补充发言结束，请在平票玩家中投票。', 'system');

      const voters = undercoverGameState.players.filter(
        p => p.isAlive && !undercoverGameState.tiedPlayers.includes(p.id),
      );
      const targets = undercoverGameState.players.filter(p => undercoverGameState.tiedPlayers.includes(p.id));
      undercoverGameState.votes = {};

      for (const voter of voters) {
        let voteResult;
        if (voter.isUser) {
          voteResult = await waitForUserUndercoverAction('请投票', 'vote', { targets: targets });
        } else {
          voteResult = await triggerUndercoverAiAction(voter.id, 'vote', { targets: targets });
        }

        if (voteResult && voteResult.voteForId) {
          const targetId = voteResult.voteForId;
          const reason = voteResult.reason || '未说明理由';
          const targetPlayer = targets.find(p => p.id === targetId);
          if (targetPlayer) {
            logToUndercoverGame(
              `<strong>${voter.name}</strong> 投票给了 <strong>${targetPlayer.name}</strong>，理由是：“${reason}”`,
            );
            undercoverGameState.votes[targetId] = (undercoverGameState.votes[targetId] || 0) + 1;
          }
        } else {
          const reason = voteResult ? voteResult.reason || '信息不足，无法判断。' : '信息不足，无法判断。';
          logToUndercoverGame(`<strong>${voter.name}</strong> 弃票了，理由是：“${reason}”`);
        }
        await sleep(500);
      }

      const voteCounts = undercoverGameState.votes;
      let maxVotes = 0;
      let playersToEliminate = [];
      for (const playerId in voteCounts) {
        if (voteCounts[playerId] > maxVotes) {
          maxVotes = voteCounts[playerId];
          playersToEliminate = [playerId];
        } else if (voteCounts[playerId] === maxVotes) {
          playersToEliminate.push(playerId);
        }
      }

      if (playersToEliminate.length !== 1) {
        logToUndercoverGame('再次平票，本轮无人出局。', 'system');
      } else {
        const eliminatedPlayerId = playersToEliminate[0];
        const eliminatedPlayer = undercoverGameState.players.find(p => p.id === eliminatedPlayerId);
        eliminatedPlayer.isAlive = false;
        undercoverGameState.votedOutPlayers.push(eliminatedPlayer);
        const roleName = { undercover: '卧底', civilian: '平民', whiteboard: '白板' }[eliminatedPlayer.role] || '未知';
        logToUndercoverGame(`PK投票结果：【${eliminatedPlayer.name}】被淘汰！他/她的身份是【${roleName}】。`, 'system');
      }

      renderUndercoverGameScreen();
      if (checkUndercoverGameOver()) return;

      undercoverGameState.tiedPlayers = [];
      undercoverGameState.dayNumber++;
      undercoverGameState.gamePhase = 'description_round';
      await sleep(3000);
      await processUndercoverTurn();
      break;
    }
  }
}
// ▲▲▲ 替换结束 ▲▲▲

/**
 * 【卧底】渲染游戏主界面
 */
function renderUndercoverGameScreen(options = {}) {
  const playersGrid = document.getElementById('undercover-players-grid');
  const logContainer = document.getElementById('undercover-game-log');

  playersGrid.innerHTML = '';
  undercoverGameState.players.forEach(player => {
    const seat = document.createElement('div');
    seat.className = 'player-seat';
    const avatarClass = `player-avatar ${!player.isAlive ? 'dead' : ''} ${
      options.speakingPlayerId === player.id ? 'speaking' : ''
    }`;

    seat.innerHTML = `
            <img src="${player.avatar}" class="${avatarClass}">
            <span class="player-name">${player.name} ${!player.isAlive ? '(淘汰)' : ''}</span>
        `;
    playersGrid.appendChild(seat);
  });

  logContainer.innerHTML = '';
  undercoverGameState.gameLog.forEach(log => {
    const logEl = document.createElement('div');
    if (log.type === 'speech') {
      logEl.className = 'log-entry speech';
      logEl.innerHTML = `
                <img src="${log.message.player.avatar}" class="speech-avatar">
                <div class="speech-content">
                    <span class="speaker">${log.message.player.name}</span>
                    <span class="speech-text">${log.message.speech.replace(/\n/g, '<br>')}</span>
                </div>
            `;
    } else {
      logEl.className = `log-entry ${log.type}`;
      logEl.innerHTML = String(log.message).replace(/\n/g, '<br>');
    }
    logContainer.appendChild(logEl);
  });
  logContainer.scrollTop = logContainer.scrollHeight;
}

/**
 * 【卧底】添加一条游戏日志
 */
function logToUndercoverGame(message, type = 'system') {
  undercoverGameState.gameLog.push({ message, type });
  renderUndercoverGameScreen();
}

// ▼▼▼ 【卧底输入框美化版】请用这个【全新】的函数，完整替换掉你旧的 waitForUserUndercoverAction 函数 ▼▼▼
/**
 * 【卧底 V4】等待用户行动的通用函数（已修复placeholder错误）
 */
function waitForUserUndercoverAction(promptText, actionType, context = {}) {
  const me = undercoverGameState.players.find(p => p.isUser);
  if (me && !me.isAlive) {
    const actionArea = document.getElementById('undercover-action-area');
    actionArea.innerHTML = `<h5>您已淘汰，正在观战...</h5>`;
    return new Promise(async resolve => {
      await sleep(3000);
      actionArea.innerHTML = '';
      resolve(null);
    });
  }

  return new Promise(resolve => {
    const actionArea = document.getElementById('undercover-action-area');
    actionArea.innerHTML = '';
    actionArea.className = 'undercover-action-area';

    if (actionType === 'speak') {
      actionArea.classList.add('speaking-mode');

      // ★★★ 核心修复：从 context 对象中获取 placeholder ★★★
      const placeholderText = context.placeholder || '请输入你的发言...';

      actionArea.innerHTML = `<textarea id="undercover-user-speech-input" rows="1" placeholder="${placeholderText}"></textarea><button id="undercover-end-speech-btn" class="form-button">发言</button>`;

      const textarea = document.getElementById('undercover-user-speech-input');
      const endBtn = document.getElementById('undercover-end-speech-btn');
      textarea.addEventListener('input', () => {
        textarea.style.height = 'auto';
        textarea.style.height = textarea.scrollHeight + 'px';
      });
      textarea.focus();
      endBtn.onclick = () => {
        const speech = textarea.value.trim() || '我过。';
        actionArea.innerHTML = '';
        actionArea.classList.remove('speaking-mode');
        resolve(speech);
      };
    } else if (actionType === 'vote') {
      actionArea.innerHTML = `<h5>${promptText}</h5>`;
      const grid = document.createElement('div');
      grid.className = 'vote-target-grid';

      // ★★★ 核心修改：在这里判断是普通投票还是最终PK投票 ★★★
      const targets = context.targets
        ? context.targets.filter(p => !p.isUser)
        : undercoverGameState.players.filter(p => p.isAlive && !p.isUser); // 否则是所有存活玩家

      targets.forEach(player => {
        const btn = document.createElement('button');
        btn.className = 'form-button-secondary vote-target-btn';
        btn.textContent = player.name;
        btn.onclick = async () => {
          const reason = await showCustomPrompt(`投票给 ${player.name}`, '请输入你的投票理由（可选）');
          if (reason !== null) {
            actionArea.innerHTML = '';
            resolve({ voteForId: player.id, reason: reason.trim() || '没有理由，跟着感觉走。' });
          }
        };
        grid.appendChild(btn);
      });

      // ★★★ 核心修改：只有在普通投票时才显示“弃票”按钮 ★★★
      if (!context.targets) {
        const passBtn = document.createElement('button');
        passBtn.className = 'form-button-secondary vote-target-btn';
        passBtn.textContent = '弃票';
        passBtn.onclick = async () => {
          const reason = await showCustomPrompt(`确认弃票`, '请输入你弃票的理由（可选）');
          if (reason !== null) {
            actionArea.innerHTML = '';
            resolve({ voteForId: null, reason: reason.trim() || '信息不足，无法判断。' });
          }
        };
        grid.appendChild(passBtn);
      }

      actionArea.appendChild(grid);
    }
  });
}
// ▲▲▲ 替换结束 ▲▲▲

// ▼▼▼ 用这块【已添加平票逻辑】的代码，完整替换你旧的 triggerUndercoverAiAction 函数 ▼▼▼
/**
 * 【卧底-AI核心 V4 - 平票逻辑增强版】
 * @param {string} playerId - 触发行动的AI玩家ID
 * @param {string} actionType - AI需要执行的动作: 'describe', 'vote', 'tie_speak'
 * @returns {Promise<object|string|null>} - AI的行动结果
 */
async function triggerUndercoverAiAction(playerId, actionType, context = {}) {
  const player = undercoverGameState.players.find(p => p.id === playerId);
  if (!player || !player.isAlive) return null;

  const { proxyUrl, apiKey, model } = state.apiConfig;
  if (!proxyUrl || !apiKey || !model) {
    if (actionType === 'describe' || actionType === 'tie_speak') return '我...词穷了，过。';
    if (actionType === 'vote') {
      const targets = context.targets || undercoverGameState.players.filter(p => p.isAlive && p.id !== playerId);
      const randomTargetId = targets.length > 0 ? targets[Math.floor(Math.random() * targets.length)].id : null;
      return { voteForId: randomTargetId, reason: '我凭直觉投的。' };
    }
    return null;
  }

  let actionPrompt = '';
  let jsonFormat = '';
  let roleDescription = '';
  let votingRule = '';
  // 【核心修改1】根据是否是平票后的再次投票，来决定可投票的目标
  const voteTargets = context.targets || undercoverGameState.players.filter(p => p.isAlive && p.id !== player.id);
  const alivePlayersListForVote = voteTargets.map(p => `- ${p.name} (id: ${p.id})`).join('\n');

  const gameLog = undercoverGameState.gameLog
    .filter(log => log.type === 'speech')
    .map(log => `${log.message.player.name}: ${log.message.speech}`)
    .join('\n');

  switch (actionType) {
    case 'describe':
      // ★★★ 核心修改2：为“描述”指令添加轮次信息 ★★★
      if (undercoverGameState.dayNumber > 1) {
        actionPrompt = `游戏进入了第 ${undercoverGameState.dayNumber} 轮。现在轮到你发言。请根据你的身份和词语，用一句【全新的、和之前轮次不同】的话来描述。你的描述必须是真实的，但要足够模糊。禁止重复他人的描述。`;
      } else {
        actionPrompt = `现在是第一轮，轮到你发言。请根据你的身份和词语，用一句话描述。你的描述必须是真实的，但要足够模糊。禁止重复他人的描述。`;
      }
      jsonFormat = '{"description": "你的描述..."}';
      break;
    // =======================================================
    // ★★★ 【全新】为AI增加补充发言的指令 ★★★
    // =======================================================
    case 'tie_speak':
      actionPrompt =
        '你因为平票正在进行补充发言。请为自己辩解，说服其他人不要投票给你。你的发言要简短有力，符合你的人设和身份。';
      jsonFormat = '{"description": "你的补充发言..."}';
      break;
    case 'vote':
      actionPrompt = `现在是投票环节。请仔细分析【所有玩家的发言】，找出描述最可疑、最偏离主题、或者听起来最心虚的那个人，然后投票给他/她，并给出【简洁且符合逻辑】的理由。或者，如果你觉得信息不足无法判断，也可以选择弃票，并说明你弃票的原因。`;
      jsonFormat = '{"voteForId": "你投票的玩家ID或null", "reason": "你的投票或弃票理由..."}';
      votingRule = `
# 【【【投票铁律：这是最高指令，必须严格遵守】】】
在你的 "reason" 投票理由中，【绝对禁止】直接或间接提及你自己的词语，或猜测别人的词语是什么。你的理由只能基于对他人【发言描述】的分析，例如“他的描述很模糊”、“她的描述和大家不一样”等等。
`;
      break;
  }

  if (player.role === 'civilian') {
    roleDescription = `你是【平民】，你的词是【${player.word}】。你的目标是找出卧底和白板并投票淘汰他们。`;
  } else if (player.role === 'undercover') {
    roleDescription = `你是【卧底】，你的词是【${player.word}】。你的词和平民的词意思相近但不同。你的任务是【伪装】！仔细听别人的发言，找出他们的共同点，让自己听起来像个好人。`;
  } else {
    // whiteboard
    roleDescription = `你是【白板】，你没有词语。你的任务是【伪装和猜测】！在轮到你发言之前，【仔细听】前面所有人的描述，【猜出】他们的词语大概是什么，然后给出一个【非常模糊】的描述，让自己听起来和他们是一伙的。`;
  }

  const systemPrompt = `
# 游戏背景: 谁是卧底
你正在扮演玩家“${player.name}”，你的人设是：“${player.persona}”。

# 你的身份和任务
${roleDescription}
你的所有行为都必须符合你的人设和游戏目标。
${votingRule}
# 当前场上局势
- 可投票的玩家列表:
${alivePlayersListForVote} 
- 本轮所有人的发言记录:
${gameLog || '(暂无发言)'}

# 你的行动指令
${actionPrompt}

# 输出格式
你的回复【必须且只能】是一个严格的JSON对象，格式如下:
${jsonFormat}
`;

  try {
    const messagesForApi = [{ role: 'user', content: systemPrompt }];
    let isGemini = proxyUrl === GEMINI_API_URL;
    let geminiConfig = toGeminiRequestData(
      model,
      apiKey,
      systemPrompt,
      messagesForApi,
      isGemini,
      state.apiConfig.temperature,
    );

    const response = isGemini
      ? await fetch(geminiConfig.url, geminiConfig.data)
      : await fetch(`${proxyUrl}/v1/chat/completions`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${apiKey}` },
          body: JSON.stringify({
            model: model,
            messages: messagesForApi,
            temperature: parseFloat(state.apiConfig.temperature) || 0.8,
            response_format: { type: 'json_object' },
          }),
        });

    if (!response.ok) throw new Error(await response.text());
    const data = await response.json();
    const content = (isGemini ? data.candidates[0].content.parts[0].text : data.choices[0].message.content).replace(
      /^```json\s*|```$/g,
      '',
    );
    const aiAction = JSON.parse(content);

    // 【核心修改2】根据不同的行动类型，返回不同的结果
    if (actionType === 'describe' || actionType === 'tie_speak') {
      return aiAction.description || '我过。';
    }

    if (actionType === 'vote') {
      if (aiAction.voteForId === player.id) {
        const targets = voteTargets.filter(p => p.id !== player.id); // 确保不会投给自己
        const randomTargetId = targets.length > 0 ? targets[Math.floor(Math.random() * targets.length)].id : null;
        return { voteForId: randomTargetId, reason: '我感觉有点混乱，随便投一个吧。' };
      }
      return aiAction;
    }
    return null;
  } catch (error) {
    console.error(`卧底AI (${player.name}) 行动失败:`, error);
    if (actionType === 'describe' || actionType === 'tie_speak') return '我想不出来，过。';
    if (actionType === 'vote') {
      const targets = voteTargets.filter(p => p.id !== player.id);
      const randomTargetId = targets.length > 0 ? targets[Math.floor(Math.random() * targets.length)].id : null;
      return { voteForId: randomTargetId, reason: '思考超时，凭直觉投的。' };
    }
    return null;
  }
}
// ▲▲▲ 替换结束 ▲▲▲

/**
 * 【卧底】检查游戏是否结束 (已集成复盘分享)
 */
function checkUndercoverGameOver() {
  const alivePlayers = undercoverGameState.players.filter(p => p.isAlive);
  const aliveCount = alivePlayers.length;
  const undercoverCount = alivePlayers.filter(p => p.role === 'undercover' || p.role === 'whiteboard').length;
  const civilianCount = aliveCount - undercoverCount;

  let winner = null;

  if (undercoverCount === 0) {
    winner = '平民阵营';
  } else if (civilianCount <= undercoverCount) {
    winner = '卧底阵营';
  }

  if (winner) {
    undercoverGameState.isActive = false;
    logToUndercoverGame(`游戏结束！${winner}胜利！`, 'system');

    // ▼▼▼ 【核心修改】在这里调用我们新的复盘功能！ ▼▼▼
    setTimeout(() => {
      const summaryText = generateUndercoverSummary(winner);
      showUndercoverSummaryModal(summaryText);
    }, 2000);
    // ▲▲▲ 修改结束 ▲▲▲

    document.getElementById('undercover-action-area').innerHTML = '';
    return true;
  }
  return false;
}

// ▼▼▼ 【全新】“谁是卧底”游戏复盘与分享功能核心代码 ▼▼▼

/**
 * 生成“谁是卧底”的复盘文本，包含完整的游戏日志
 * @param {string} winner - 胜利的阵营名称
 * @returns {string} - 格式化后的复盘Markdown文本
 */
function generateUndercoverSummary(winner) {
  let summary = `**谁是卧底 - 游戏复盘**\n\n`;
  summary += `🏆 **胜利方:** ${winner}\n\n`;
  summary += `**词语揭晓:**\n- 平民词: **${undercoverGameState.civilianWord}**\n- 卧底词: **${undercoverGameState.undercoverWord}**\n\n`;

  summary += `**玩家身份:**\n`;
  undercoverGameState.players.forEach(p => {
    const roleName = { undercover: '卧底', civilian: '平民', whiteboard: '白板' }[p.role];
    summary += `- ${p.name}: ${roleName}\n`;
  });

  summary += `\n---\n\n**游戏过程回顾:**\n`;
  const formattedLog = undercoverGameState.gameLog
    .map(log => {
      if (log.type === 'speech') {
        return `${log.message.player.name}: ${log.message.speech}`;
      }
      return log.message.replace(/<strong>/g, '**').replace(/<\/strong>/g, '**'); // 将HTML粗体转为Markdown
    })
    .join('\n');
  summary += formattedLog;

  return summary;
}

/**
 * 【卧底】打开复盘分享目标选择器
 * @param {string} summaryText - 要分享的复盘文本
 */
function openUndercoverSummaryTargetPicker(summaryText) {
  const modal = document.getElementById('undercover-target-picker-modal');
  const listEl = document.getElementById('undercover-target-list');
  listEl.innerHTML = '';

  const aiPlayers = undercoverGameState.players.filter(p => !p.isUser);

  if (aiPlayers.length === 0) {
    alert('没有可分享的AI玩家。');
    return;
  }

  // 渲染可选的AI玩家列表
  aiPlayers.forEach(player => {
    const item = document.createElement('div');
    item.className = 'player-selection-item'; // 复用之前的样式
    item.innerHTML = `
            <input type="checkbox" class="undercover-target-checkbox" value="${player.id}" checked>
            <img src="${player.avatar || defaultAvatar}" alt="${player.name}">
            <span class="name">${player.name}</span>
        `;
    listEl.appendChild(item);
  });

  // 绑定按钮事件
  const confirmBtn = document.getElementById('uc-confirm-share-btn');
  const newConfirmBtn = confirmBtn.cloneNode(true);
  confirmBtn.parentNode.replaceChild(newConfirmBtn, confirmBtn);
  newConfirmBtn.onclick = () => {
    const selectedIds = Array.from(document.querySelectorAll('.undercover-target-checkbox:checked')).map(
      cb => cb.value,
    );
    if (selectedIds.length > 0) {
      sendUndercoverSummaryToSelectedPlayers(summaryText, selectedIds);
    } else {
      alert('请至少选择一个分享对象！');
    }
  };

  document.getElementById('uc-cancel-share-btn').onclick = () => modal.classList.remove('visible');
  document.getElementById('uc-select-all-btn').onclick = () => {
    document.querySelectorAll('.undercover-target-checkbox').forEach(cb => (cb.checked = true));
  };
  document.getElementById('uc-deselect-all-btn').onclick = () => {
    document.querySelectorAll('.undercover-target-checkbox').forEach(cb => (cb.checked = false));
  };

  modal.classList.add('visible');
}

/**
 * 【卧底】将游戏复盘发送到【选定】的AI角色的单聊中
 * @param {string} summaryText - 复盘文本
 * @param {string[]} targetIds - 目标AI角色的ID数组
 */
async function sendUndercoverSummaryToSelectedPlayers(summaryText, targetIds) {
  document.getElementById('undercover-summary-modal').classList.remove('visible');
  document.getElementById('undercover-target-picker-modal').classList.remove('visible');
  let sentCount = 0;

  const aiContext = `[系统指令：刚刚结束了一局“谁是卧底”，这是游戏复盘。请根据这个复盘内容，以你的角色人设，和用户聊聊刚才的游戏。]\n\n${summaryText}`;

  for (const chatId of targetIds) {
    const chat = state.chats[chatId];
    if (chat) {
      const visibleMessage = {
        role: 'user',
        type: 'text',
        timestamp: Date.now(),
        content: summaryText,
      };
      const hiddenInstruction = {
        role: 'system',
        content: aiContext,
        timestamp: Date.now() + 1,
        isHidden: true,
      };

      chat.history.push(visibleMessage, hiddenInstruction);
      await db.chats.put(chat);
      sentCount++;
    }
  }

  await showCustomAlert('分享成功', `游戏复盘已分享至 ${sentCount} 位AI玩家的单聊中！`);
  showScreen('game-hall-screen');
}

/**
 * 【卧底】显示游戏结算卡片 (V2 - 已集成分享功能)
 */
function showUndercoverSummaryModal(summaryText) {
  const modal = document.getElementById('undercover-summary-modal');
  const contentEl = document.getElementById('undercover-summary-content');

  // 使用Markdown渲染函数，让复盘更好看
  contentEl.innerHTML = renderMarkdown(summaryText);

  // --- ▼▼▼ 核心修改在这里 ▼▼▼ ---

  // 为“分享复盘”按钮绑定新的点击事件
  const repostBtn = document.getElementById('repost-undercover-summary-btn');
  const newRepostBtn = repostBtn.cloneNode(true);
  repostBtn.parentNode.replaceChild(newRepostBtn, repostBtn);
  newRepostBtn.onclick = () => openUndercoverSummaryTargetPicker(summaryText); // 调用我们即将创建的目标选择器函数

  // 为“返回大厅”按钮绑定事件
  const backBtn = document.getElementById('back-to-hall-from-undercover-btn');
  const newBackBtn = backBtn.cloneNode(true);
  backBtn.parentNode.replaceChild(newBackBtn, backBtn);
  newBackBtn.onclick = () => {
    modal.classList.remove('visible');
    showScreen('game-hall-screen');
  };

  // --- ▲▲▲ 修改结束 ▲▲▲ ---

  modal.classList.add('visible');
}

// ▲▲▲ “谁是卧底”核心逻辑代码结束 ▲▲▲
/**
 * 【全新】调用AI为“谁是卧底”游戏生成一组词语
 * @returns {Promise<object>} - 返回一个包含 { civilian: '平民词', undercover: '卧底词' } 的对象
 */
async function generateUndercoverWordsAI() {
  await showCustomAlert('请稍候...', 'AI正在为你出题...');
  const { proxyUrl, apiKey, model } = state.apiConfig;
  if (!proxyUrl || !apiKey || !model) {
    throw new Error('API未配置，无法生成词语。');
  }

  const prompt = `
# 任务
你是一个“谁是卧底”游戏出题人。请生成一组有趣且有迷惑性的词语。

# 规则
1.  你必须生成两个词语：一个“平民词(civilianWord)”和一个“卧底词(undercoverWord)”。
2.  这两个词语必须属于同一大类，但具体指向不同。例如：牛奶 vs 豆浆，唇膏 vs 口红。
3.  词语必须是常见的2-4个字的中文名词。
4.  你的回复【必须且只能】是一个严格的JSON对象，格式如下:
    {"civilianWord": "...", "undercoverWord": "..."}
5.  【绝对禁止】返回任何JSON以外的文本、解释或分析。

现在，请出题。`;

  try {
    const messagesForApi = [{ role: 'user', content: prompt }];
    let isGemini = proxyUrl === GEMINI_API_URL;
    let geminiConfig = toGeminiRequestData(model, apiKey, prompt, messagesForApi, isGemini);

    const response = isGemini
      ? await fetch(geminiConfig.url, geminiConfig.data)
      : await fetch(`${proxyUrl}/v1/chat/completions`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${apiKey}` },
          body: JSON.stringify({
            model: model,
            messages: messagesForApi,
            temperature: parseFloat(state.apiConfig.temperature) || 0.8,
            response_format: { type: 'json_object' },
          }),
        });

    if (!response.ok) throw new Error(`API请求失败: ${response.status}`);

    const data = await response.json();
    const rawContent = (isGemini ? data.candidates[0].content.parts[0].text : data.choices[0].message.content)
      .replace(/^```json\s*|```$/g, '')
      .trim();
    const wordPair = JSON.parse(rawContent);

    if (wordPair.civilianWord && wordPair.undercoverWord) {
      return { civilian: wordPair.civilianWord, undercover: wordPair.undercoverWord };
    }
    throw new Error('AI返回的词语格式不正确。');
  } catch (error) {
    console.error('AI生成词语失败:', error);
    throw error; // 将错误抛出，由调用者处理
  }
}

// ▲▲▲ 新功能函数粘贴结束 ▲▲▲
