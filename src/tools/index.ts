import { setCanvasTool } from './canvas';
import { setMusicCanvasTool } from './musicCanvas';
import { musicCallbackTool } from './musicCallback';
import { sendKakaoTalkTool } from './katalk';
import { sendSlackTool } from './slack';
import {
  getStudentsListTool,
  displayStudentsListTool,
  updateStudentListTool,
} from './students';
import { getCoordinatesTool } from './address';

// Export all tools
export {
  setCanvasTool,
  setMusicCanvasTool,
  musicCallbackTool,
  sendKakaoTalkTool,
  sendSlackTool,
  getStudentsListTool,
  displayStudentsListTool,
  updateStudentListTool,
  getCoordinatesTool,
};

// Register all available tools
export const tools = [
  setCanvasTool,
  setMusicCanvasTool,
  musicCallbackTool,
  sendKakaoTalkTool,
  sendSlackTool,
  getStudentsListTool(),
  displayStudentsListTool,
  updateStudentListTool,
  getCoordinatesTool,
];
