/*
 * LA WEB DEL PROFE - APLICACIÓN PRINCIPAL
 * Prof. Héctor Hernández - 2025
 * Funcionalidades principales de la plataforma
 */

// =================================================================
// DATOS DE CURSOS CON ESTRUCTURA DE MÓDULOS Y LECCIONES
// =================================================================
const courseData = {
    'curso-electro': {
        id: 'curso-electro',
        title: "⚡ Física II - Electromagnetismo",
        path: 'cursos/curso-electro/',
        modules: {
            'modulo-1': {
                id: 'modulo-1',
                name: "Módulo I - Campo Eléctrico",
                description: "Fundamentos de la electricidad, propiedades de la carga eléctrica y la ley de Coulomb.",
                lessons: [
                    { 
                        id: 'leccion-1-0',
                        name: "Lección 1.0: Introducción al Curso", 
                        status: "uploaded", 
                        presentation: "presentación.pdf",
                        path: "modulos/modulo-1/leccion-1-0/"
                    },
                    { 
                        id: 'leccion-1-1',
                        name: "Lección 1.1: Campo Eléctrico", 
                        status: "uploaded", 
                        presentation: "S01_CampoE.pdf",
                        path: "modulos/modulo-1/leccion-1-1/"
                    },
                    { 
                        id: 'leccion-1-2',
                        name: "Lección 1.2: Distribuciones de cargas", 
                        status: "uploaded", 
                        presentation: "S02_DisCar.pdf",
                        path: "modulos/modulo-1/leccion-1-2/"
                    },
                    { 
                        id: 'leccion-1-3',
                        name: "Lección 1.3: Ley de Gauss", 
                        status: "uploaded", 
                        presentation: "S03_Gasuss.pdf",
                        path: "modulos/modulo-1/leccion-1-3/"
                    }
                ]
            },
            'modulo-2': {
                id: 'modulo-2',
                name: "Módulo II - Potencial Eléctrico",
                description: "Concepto de campo eléctrico, líneas de campo y aplicaciones prácticas.",
                lessons: [
                    { 
                        id: 'leccion-2-1',
                        name: "Lección 2.1: Energía Potencial Eléctrica", 
                        status: "uploaded", 
                        presentation: "S04_Pote.pdf" ,
                        path: "modulos/modulo-2/leccion-2-1/"
                    },
                    { 
                        id: 'leccion-2-2',
                        name: "Lección 2.2: Potencial de distribuciones de carga continuas", 
                        status: "uploaded", 
                        presentation: "S05_EnergiaElec.pdf" ,
                        path: "modulos/modulo-2/leccion-2-2/"
                    },
                    { 
                        id: 'leccion-2-3',
                        name: "Lección 2.3: Capacitancia y Capacitores", 
                        status: "uploaded", 
                        presentation: "S06_Capaci.pdf" ,
                        path: "modulos/modulo-2/leccion-2-3/"
                    }
                ]
            },
            'modulo-3': {
                id: 'modulo-3',
                name: "Módulo III - Circuitos DC",
                description: "Corriente eléctrica, circuitos de corriente continua y fundamentos del magnetismo.",
                lessons: [
                    { 
                        id: 'leccion-3-1',
                        name: "Lección 3.1: Corriente y Resistencia", 
                        status: "uploaded", 
                        presentation: "S07_Corrien.pdf" ,
                        path: "modulos/modulo-3/leccion-3-1/"
                    },
                    { 
                        id: 'leccion-3-2',
                        name: "Lección 3.2: Circuitos de Corriente Continua", 
                        status: "uploaded", 
                        presentation: "S08_Cicuitos.pdf" ,
                        path: "modulos/modulo-3/leccion-3-2/"
                    },
                    { 
                        id: 'leccion-3-3',
                        name: "Lección 3.3: Campo Magnético", 
                        status: "uploaded", 
                        presentation: "S09_CampoB.pdf" ,
                        path: "modulos/modulo-3/leccion-3-3/"
                    }
                ]
            },
            'modulo-4': {
                id: 'modulo-4',
                name: "Módulo IV - Magnetismo",
                description: "Ley de Biot-Savart, Fuerza entre alambres con corriente, Ley de Ampère, Ley de Faraday.",
                lessons: [
                    { 
                        id: 'leccion-4-1',
                        name: "Lección 4.1: Ley de Biot-Savart", 
                        status: "uploaded", 
                        presentation: "S10_FuentesB.pdf",
                        path: "modulos/modulo-4/leccion-4-1/" 
                    },
                    { 
                        id: 'leccion-4-2',
                        name: "Lección 4.2: Ley de Ampère", 
                        status: "uploaded", 
                        presentation: "S11_Induccion.pdf",
                        path: "modulos/modulo-4/leccion-4-2/" 
                    },
                    { 
                        id: 'leccion-4-3',
                        name: "Lección 4.3: Ley de Faraday e Inductancia", 
                        status: "uploaded", 
                        presentation: "S12_Induccion.pdf",
                        path: "modulos/modulo-4/leccion-4-3/" 
                    }
                ]
            }
        }
    },
    'curso-ondas': {
        id: 'curso-ondas',
        title: "🌊 Física III - Ondas y Óptica",
        path: 'cursos/curso-ondas/',
        modules: {
            'modulo-1': {
                id: 'modulo-1',
                name: "Módulo I - Movimiento Ondulatorio",
                description: "Fundamentos del movimiento ondulatorio, ondas mecánicas y sus propiedades.",
                lessons: [
                    { 
                        id: 'leccion-1-1',
                        name: "Lección 1.1: Introducción a las Ondas", 
                        status: "empty", 
                        presentation: null 
                    },
                    { 
                        id: 'leccion-1-2',
                        name: "Lección 1.2: Ondas Sinusoidales", 
                        status: "empty", 
                        presentation: null 
                    },
                    { 
                        id: 'leccion-1-3',
                        name: "Lección 1.3: Velocidad de Ondas", 
                        status: "empty", 
                        presentation: null 
                    }
                ]
            },
            'modulo-2': {
                id: 'modulo-2',
                name: "Módulo II - Superposición e Interferencia",
                description: "Principio de superposición, interferencia constructiva y destructiva.",
                lessons: [
                    { 
                        id: 'leccion-2-1',
                        name: "Lección 2.1: Principio de Superposición", 
                        status: "empty", 
                        presentation: null 
                    },
                    { 
                        id: 'leccion-2-2',
                        name: "Lección 2.2: Interferencia de Ondas", 
                        status: "empty", 
                        presentation: null 
                    },
                    { 
                        id: 'leccion-2-3',
                        name: "Lección 2.3: Experimento de Young", 
                        status: "empty", 
                        presentation: null 
                    }
                ]
            },
            'modulo-3': {
                id: 'modulo-3',
                name: "Módulo III - Difracción y Polarización",
                description: "Fenómenos de difracción, patrones de difracción y polarización de la luz.",
                lessons: [
                    { 
                        id: 'leccion-3-1',
                        name: "Lección 3.1: Difracción por Abertura Simple", 
                        status: "empty", 
                        presentation: null 
                    },
                    { 
                        id: 'leccion-3-2',
                        name: "Lección 3.2: Difracción por Rejilla", 
                        status: "empty", 
                        presentation: null 
                    },
                    { 
                        id: 'leccion-3-3',
                        name: "Lección 3.3: Polarización de la Luz", 
                        status: "empty", 
                        presentation: null 
                    }
                ]
            },
            'modulo-4': {
                id: 'modulo-4',
                name: "Módulo IV - Óptica Geométrica",
                description: "Reflexión, refracción, formación de imágenes y instrumentos ópticos.",
                lessons: [
                    { 
                        id: 'leccion-4-1',
                        name: "Lección 4.1: Reflexión y Refracción", 
                        status: "empty", 
                        presentation: null 
                    },
                    { 
                        id: 'leccion-4-2',
                        name: "Lección 4.2: Espejos y Lentes", 
                        status: "empty", 
                        presentation: null 
                    },
                    { 
                        id: 'leccion-4-3',
                        name: "Lección 4.3: Instrumentos Ópticos", 
                        status: "empty", 
                        presentation: null 
                    }
                ]
            }
        }
    },
    'curso-lab': {
        id: 'curso-lab',
        title: "🔬 Laboratorio de Física II",
        path: 'cursos/curso-lab/',
        modules: {
            'modulo-1': {
                id: 'modulo-1',
                name: "Módulo I - Fundamentos Experimentales",
                description: "Metodología científica, análisis de errores y técnicas de medición.",
                lessons: [
                    { 
                        id: 'leccion-1-1',
                        name: "Lección 1.1: Metodología Científica", 
                        status: "empty", 
                        presentation: null 
                    },
                    { 
                        id: 'leccion-1-2',
                        name: "Lección 1.2: Análisis de Errores", 
                        status: "empty", 
                        presentation: null 
                    },
                    { 
                        id: 'leccion-1-3',
                        name: "Lección 1.3: Instrumentos de Medición", 
                        status: "empty", 
                        presentation: null 
                    }
                ]
            },
            'modulo-2': {
                id: 'modulo-2',
                name: "Módulo II - Prácticas de Electrostática",
                description: "Experimentos con carga eléctrica, campos eléctricos y potencial.",
                lessons: [
                    { 
                        id: 'leccion-2-1',
                        name: "Lección 2.1: Electroscopio y Carga", 
                        status: "empty", 
                        presentation: null 
                    },
                    { 
                        id: 'leccion-2-2',
                        name: "Lección 2.2: Mapeo de Campos", 
                        status: "empty", 
                        presentation: null 
                    },
                    { 
                        id: 'leccion-2-3',
                        name: "Lección 2.3: Superficies Equipotenciales", 
                        status: "empty", 
                        presentation: null 
                    }
                ]
            },
            'modulo-3': {
                id: 'modulo-3',
                name: "Módulo III - Circuitos Eléctricos",
                description: "Análisis experimental de circuitos de corriente continua.",
                lessons: [
                    { 
                        id: 'leccion-3-1',
                        name: "Lección 3.1: Ley de Ohm Experimental", 
                        status: "empty", 
                        presentation: null 
                    },
                    { 
                        id: 'leccion-3-2',
                        name: "Lección 3.2: Circuitos Serie y Paralelo", 
                        status: "empty", 
                        presentation: null 
                    },
                    { 
                        id: 'leccion-3-3',
                        name: "Lección 3.3: Circuitos RC", 
                        status: "empty", 
                        presentation: null 
                    }
                ]
            },
            'modulo-4': {
                id: 'modulo-4',
                name: "Módulo IV - Magnetismo y Proyecto",
                description: "Experimentos con campos magnéticos y proyecto de investigación.",
                lessons: [
                    { 
                        id: 'leccion-4-1',
                        name: "Lección 4.1: Campo Magnético Terrestre", 
                        status: "empty", 
                        presentation: null 
                    },
                    { 
                        id: 'leccion-4-2',
                        name: "Lección 4.2: Inducción Electromagnética", 
                        status: "empty", 
                        presentation: null 
                    },
                    { 
                        id: 'leccion-4-3',
                        name: "Lección 4.3: Proyecto de Investigación", 
                        status: "empty", 
                        presentation: null 
                    }
                ]
            }
        }
    }
};

// Mapeo de IDs antiguos a nuevos para compatibilidad
const courseIdMap = {
    'fisica2': 'curso-electro',
    'fisica3': 'curso-ondas',
    'lab2': 'curso-lab'
};

// =================================================================
// PANEL DEL PROFESOR
// =================================================================
function toggleTeacherPanel() {
    const panel = document.getElementById('teacherPanel');
    if (panel.classList.contains('show')) {
        panel.classList.remove('show');
        setTimeout(() => panel.style.display = 'none', 300);
    } else {
        panel.style.display = 'block';
        setTimeout(() => panel.classList.add('show'), 10);
    }
}

// =================================================================
// FUNCIONES PRINCIPALES DE NAVEGACIÓN
// =================================================================
function openCourse(courseId) {
    // Convertir ID antiguo a nuevo si es necesario
    const actualCourseId = courseIdMap[courseId] || courseId;
    const course = courseData[actualCourseId];
    const modal = document.getElementById('courseModal');
    const content = document.getElementById('courseContent');
    
    if (!course) {
        console.error(`Curso ${actualCourseId} no encontrado`);
        return;
    }
    
    let html = `
        <h2>${course.title}</h2>
        <p style="color: #666; margin-bottom: 30px;">
            📚 Estructura del curso organizada en módulos y lecciones • ${Object.keys(course.modules).length} módulos disponibles
        </p>
        <div class="modules-grid">
    `;
    
    Object.keys(course.modules).forEach(moduleId => {
        const module = course.modules[moduleId];
        html += `
            <div class="module-card">
                <div class="module-title">${module.name}</div>
                <div class="module-description">${module.description}</div>
                <ul class="lessons-list">
        `;
        
        module.lessons.forEach((lesson, index) => {
            const statusText = {
                'uploaded': '✅',
                'pending': '⏳',
                'empty': '❌'
            };
            
            const lessonUrl = lesson.path ? `${course.path}${lesson.path}index.html` : '#';
            const clickAction = lesson.status === 'uploaded' ? `onclick="window.open('${lessonUrl}', '_blank')"` : '';
            const cursorStyle = lesson.status === 'uploaded' ? 'cursor: pointer;' : 'cursor: not-allowed; opacity: 0.7;';
            
            html += `
                <li class="lesson-item" ${clickAction} style="${cursorStyle}">
                    <span class="lesson-name">${lesson.name}</span>
                    <span class="lesson-status ${lesson.status}">${statusText[lesson.status]}</span>
                </li>
            `;
        });
        
        html += `
                </ul>
            </div>
        `;
    });
    
    html += '</div>';
    content.innerHTML = html;
    modal.style.display = 'block';
}

function closeModal() {
    document.getElementById('courseModal').style.display = 'none';
}

// =================================================================
// FUNCIONES DEL PANEL ADMINISTRATIVO
// =================================================================
function showStats() {
    const statsData = {
        totalStudents: 128,
        activeToday: 45,
        avgProgress: 73,
        completedAssignments: 89,
        presentationsUploaded: calculateUploadedPresentations()
    };
    
    alert(`📊 ESTADÍSTICAS DE LA WEB DEL PROFE\n\n` +
          `👥 Total estudiantes: ${statsData.totalStudents}\n` +
          `🟢 Activos hoy: ${statsData.activeToday}\n` +
          `📈 Progreso promedio: ${statsData.avgProgress}%\n` +
          `✅ Tareas completadas: ${statsData.completedAssignments}%\n` +
          `📊 Presentaciones subidas: ${statsData.presentationsUploaded.uploaded}/${statsData.presentationsUploaded.total}\n\n` +
          `🔧 Panel completo en desarrollo...`);
}

function calculateUploadedPresentations() {
    let uploaded = 0;
    let total = 0;
    
    Object.keys(courseData).forEach(courseId => {
        const course = courseData[courseId];
        Object.keys(course.modules).forEach(moduleId => {
            const module = course.modules[moduleId];
            module.lessons.forEach(lesson => {
                total++;
                if (lesson.status === 'uploaded') {
                    uploaded++;
                }
            });
        });
    });
    
    return { uploaded, total };
}

function manageAssignments() {
    alert(`📝 GESTOR DE TAREAS\n\n` +
          `Funcionalidades disponibles:\n` +
          `• ➕ Crear nuevas asignaciones\n` +
          `• 📅 Establecer fechas límite\n` +
          `• 👀 Revisar entregas\n` +
          `• 🤖 Calificación automática\n` +
          `• 📧 Notificaciones automáticas\n\n` +
          `🔧 Implementación en desarrollo...`);
}

function gradebook() {
    alert(`📋 LIBRO DE CALIFICACIONES\n\n` +
          `Características incluidas:\n` +
          `• 👤 Vista por estudiante\n` +
          `• 📊 Exportar a Excel/CSV\n` +
          `• 📈 Estadísticas del curso\n` +
          `• 💬 Retroalimentación personalizada\n` +
          `• 🎯 Análisis de desempeño\n\n` +
          `🔧 Integración próxima...`);
}

function announcements() {
    alert(`📢 CENTRO DE ANUNCIOS\n\n` +
          `Herramientas de comunicación:\n` +
          `• 📅 Notificar cambios de cronograma\n` +
          `• ⏰ Recordatorios de exámenes\n` +
          `• 📚 Compartir recursos adicionales\n` +
          `• 💬 Comunicación directa\n` +
          `• 🔔 Push notifications\n\n` +
          `🔧 Sistema de mensajería en desarrollo...`);
}

function manageStudents() {
    alert(`👥 GESTIÓN DE ESTUDIANTES\n\n` +
          `Funcionalidades:\n` +
          `• 📋 Lista de estudiantes inscritos\n` +
          `• 📈 Seguimiento individual\n` +
          `• 📧 Comunicación directa\n` +
          `• 🎯 Asignación de grupos\n` +
          `• 📊 Reportes de progreso\n\n` +
          `🔧 En desarrollo...`);
}

// =================================================================
// SISTEMA DE CARGA DE PRESENTACIONES
// =================================================================
function openUploadModal() {
    document.getElementById('uploadModal').style.display = 'block';
}

function closeUploadModal() {
    document.getElementById('uploadModal').style.display = 'none';
    document.getElementById('uploadForm').reset();
    
    // Limpiar selectores dependientes
    document.getElementById('moduleSelect').innerHTML = '<option value="">-- Seleccionar Módulo --</option>';
    document.getElementById('lessonSelect').innerHTML = '<option value="">-- Seleccionar Lección --</option>';
}

function updateModules() {
    const courseSelect = document.getElementById('courseSelect');
    const moduleSelect = document.getElementById('moduleSelect');
    const lessonSelect = document.getElementById('lessonSelect');
    
    // Limpiar módulos y lecciones
    moduleSelect.innerHTML = '<option value="">-- Seleccionar Módulo --</option>';
    lessonSelect.innerHTML = '<option value="">-- Seleccionar Lección --</option>';
    
    const selectedCourse = courseSelect.value;
    // Convertir ID antiguo a nuevo
    const actualCourseId = courseIdMap[selectedCourse] || selectedCourse;
    
    if (actualCourseId && courseData[actualCourseId]) {
        const modules = courseData[actualCourseId].modules;
        Object.keys(modules).forEach(moduleId => {
            const option = document.createElement('option');
            option.value = moduleId;
            option.textContent = modules[moduleId].name;
            moduleSelect.appendChild(option);
        });
    }
}

function updateLessons() {
    const courseSelect = document.getElementById('courseSelect');
    const moduleSelect = document.getElementById('moduleSelect');
    const lessonSelect = document.getElementById('lessonSelect');
    
    // Limpiar lecciones
    lessonSelect.innerHTML = '<option value="">-- Seleccionar Lección --</option>';
    
    const selectedCourse = courseSelect.value;
    const selectedModule = moduleSelect.value;
    // Convertir ID antiguo a nuevo
    const actualCourseId = courseIdMap[selectedCourse] || selectedCourse;
    
    if (actualCourseId && selectedModule && courseData[actualCourseId]) {
        const lessons = courseData[actualCourseId].modules[selectedModule].lessons;
        lessons.forEach((lesson, index) => {
            const option = document.createElement('option');
            option.value = index;
            option.textContent = lesson.name;
            lessonSelect.appendChild(option);
        });
    }
}

function processUpload(e) {
    e.preventDefault();
    
    const formData = {
        course: document.getElementById('courseSelect').value,
        module: document.getElementById('moduleSelect').value,
        lesson: document.getElementById('lessonSelect').value,
        title: document.getElementById('contentTitle').value,
        description: document.getElementById('contentDescription').value,
        files: document.getElementById('fileInput').files
    };
    
    // Validaciones
    if (!formData.course) {
        alert('⚠️ Por favor selecciona un curso');
        return;
    }
    
    if (!formData.module) {
        alert('⚠️ Por favor selecciona un módulo');
        return;
    }
    
    if (!formData.lesson) {
        alert('⚠️ Por favor selecciona una lección');
        return;
    }
    
    if (!formData.title.trim()) {
        alert('⚠️ Por favor ingresa un título para la presentación');
        return;
    }
    
    if (formData.files.length === 0) {
        alert('⚠️ Por favor selecciona un archivo de presentación');
        return;
    }
    
    // Convertir ID antiguo a nuevo
    const actualCourseId = courseIdMap[formData.course] || formData.course;
    
    // Actualizar estado de la lección
    const lesson = courseData[actualCourseId].modules[formData.module].lessons[formData.lesson];
    lesson.status = 'uploaded';
    lesson.presentation = formData.files[0].name;
    
    const courseName = document.querySelector(`#courseSelect option[value="${formData.course}"]`).textContent;
    const moduleName = document.querySelector(`#moduleSelect option[value="${formData.module}"]`).textContent;
    const lessonName = document.querySelector(`#lessonSelect option[value="${formData.lesson}"]`).textContent;
    
    alert(`✅ PRESENTACIÓN SUBIDA EXITOSAMENTE!\n\n` +
          `📚 Curso: ${courseName}\n` +
          `📖 Módulo: ${moduleName}\n` +
          `📄 Lección: ${lessonName}\n` +
          `📝 Título: ${formData.title}\n` + 
          `📁 Archivo: ${formData.files[0].name}\n\n` +
          `🚀 La presentación estará disponible para los estudiantes inmediatamente.`);
    
    closeUploadModal();
    console.log('Datos para enviar al servidor:', formData);
}

// =================================================================
// MANEJO DE DRAG & DROP
// =================================================================
function initializeDragDrop() {
    const uploadArea = document.querySelector('.upload-area');
    
    if (!uploadArea) return;
    
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
        uploadArea.addEventListener(eventName, preventDefaults, false);
        document.body.addEventListener(eventName, preventDefaults, false);
    });
    
    ['dragenter', 'dragover'].forEach(eventName => {
        uploadArea.addEventListener(eventName, highlight, false);
    });
    
    ['dragleave', 'drop'].forEach(eventName => {
        uploadArea.addEventListener(eventName, unhighlight, false);
    });
    
    uploadArea.addEventListener('drop', handleDrop, false);
}

function preventDefaults(e) {
    e.preventDefault();
    e.stopPropagation();
}

function highlight(e) {
    e.currentTarget.classList.add('dragover');
}

function unhighlight(e) {
    e.currentTarget.classList.remove('dragover');
}

function handleDrop(e) {
    const dt = e.dataTransfer;
    const files = dt.files;
    handleFiles(files);
}

function handleFiles(files) {
    const fileArray = Array.from(files);
    const allowedTypes = ['.pdf', '.pptx', '.ppt'];
    
    // Filtrar solo el primer archivo válido (solo una presentación por lección)
    const validFile = fileArray.find(file => {
        const extension = '.' + file.name.split('.').pop().toLowerCase();
        return allowedTypes.includes(extension);
    });
    
    if (validFile) {
        // Asignar archivo al input
        const fileInput = document.getElementById('fileInput');
        const dt = new DataTransfer();
        dt.items.add(validFile);
        fileInput.files = dt.files;
        
        alert(`✅ Archivo seleccionado: ${validFile.name}\n\nPor favor completa los demás campos del formulario.`);
    } else {
        alert(`❌ Formato no válido.\n\nPor favor selecciona un archivo de presentación:\n• PDF (.pdf)\n• PowerPoint (.pptx, .ppt)`);
    }
}

// =================================================================
// UTILIDADES
// =================================================================
function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        weekday: 'long'
    };
    return date.toLocaleDateString('es-ES', options);
}

function formatFileSize(bytes) {
    if (bytes === 0) return '0 Bytes';
    
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

function searchPresentations(query) {
    const results = [];
    const searchTerm = query.toLowerCase();
    
    Object.keys(courseData).forEach(courseId => {
        const course = courseData[courseId];
        Object.keys(course.modules).forEach(moduleId => {
            const module = course.modules[moduleId];
            module.lessons.forEach((lesson, lessonIndex) => {
                if (lesson.presentation && 
                    (lesson.name.toLowerCase().includes(searchTerm) || 
                     lesson.presentation.toLowerCase().includes(searchTerm))) {
                    results.push({
                        courseId,
                        moduleId,
                        lessonIndex,
                        courseTitle: course.title,
                        moduleName: module.name,
                        lessonName: lesson.name,
                        presentation: lesson.presentation,
                        status: lesson.status
                    });
                }
            });
        });
    });
    
    return results;
}

function animateOnScroll() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });
    
    document.querySelectorAll('.course-card, .resource-card, .module-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
}

// =================================================================
// INICIALIZACIÓN Y EVENTOS
// =================================================================
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 La Web del Profe inicializada');
    
    initializeDragDrop();
    
    const uploadForm = document.getElementById('uploadForm');
    if (uploadForm) {
        uploadForm.addEventListener('submit', processUpload);
    }
    
    const fileInput = document.getElementById('fileInput');
    if (fileInput) {
        fileInput.addEventListener('change', function(e) {
            if (e.target.files.length > 0) {
                handleFiles(e.target.files);
            }
        });
    }
    
    window.addEventListener('click', function(e) {
        const courseModal = document.getElementById('courseModal');
        const uploadModal = document.getElementById('uploadModal');
        
        if (e.target === courseModal) {
            closeModal();
        }
        if (e.target === uploadModal) {
            closeUploadModal();
        }
    });
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModal();
            closeUploadModal();
            const teacherPanel = document.getElementById('teacherPanel');
            if (teacherPanel && teacherPanel.classList.contains('show')) {
                toggleTeacherPanel();
            }
        }
    });
    
    animateOnScroll();
});

// =================================================================
// CONFIGURACIÓN Y CONSTANTES
// =================================================================
const APP_CONFIG = {
    version: '2.0.0',
    name: 'La Web del Profe',
    author: 'Prof. Héctor Hernández',
    university: 'Universidad XYZ',
    year: 2025,
    supportedFormats: ['.pdf', '.pptx', '.ppt'],
    maxFileSize: 50 * 1024 * 1024, // 50MB para presentaciones
    enableNotifications: true,
    enableOfflineMode: false,
    lessonsPerModule: 3
};

// =================================================================
// FUNCIONES ADICIONALES PARA RECURSOS
// =================================================================
function openResource(resourceType) {
    switch(resourceType) {
        case 'formulas':
            window.open('recursos/formularios-fisica.pdf', '_blank');
            break;
        case 'calculators':
            alert('🧮 CALCULADORAS CIENTÍFICAS\n\n' +
                  'Próximamente disponibles:\n' +
                  '• Calculadora de campos eléctricos\n' +
                  '• Calculadora de circuitos\n' +
                  '• Calculadora de ondas\n' +
                  '• Conversor de unidades\n\n' +
                  '🔧 En desarrollo...');
            break;
        case 'simulators':
            alert('📊 SIMULADORES INTERACTIVOS\n\n' +
                  'Simulaciones disponibles próximamente:\n' +
                  '• Campo eléctrico de cargas puntuales\n' +
                  '• Líneas equipotenciales\n' +
                  '• Circuitos RC y RL\n' +
                  '• Interferencia de ondas\n' +
                  '• Óptica geométrica\n\n' +
                  '🔧 En desarrollo...');
            break;
    }
}

// =================================================================
// SISTEMA DE NOTIFICACIONES
// =================================================================
function showNotification(title, message, type = 'info') {
    const notificationColors = {
        'info': '#667eea',
        'success': '#4CAF50',
        'warning': '#ff9800',
        'error': '#f44336'
    };
    
    // Crear elemento de notificación
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: white;
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0 5px 20px rgba(0,0,0,0.2);
        border-left: 4px solid ${notificationColors[type]};
        z-index: 10000;
        max-width: 300px;
        animation: slideInRight 0.3s ease;
    `;
    
    notification.innerHTML = `
        <h4 style="margin: 0 0 10px 0; color: ${notificationColors[type]};">${title}</h4>
        <p style="margin: 0; color: #666;">${message}</p>
    `;
    
    document.body.appendChild(notification);
    
    // Remover después de 5 segundos
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 5000);
}

// =================================================================
// SEGUIMIENTO DE PROGRESO
// =================================================================
function updateLessonProgress(courseId, moduleId, lessonId, completed) {
    const progressKey = `progress_${courseId}_${moduleId}_${lessonId}`;
    localStorage.setItem(progressKey, completed ? 'completed' : 'in_progress');
    
    // Actualizar progreso general del curso
    updateCourseProgress(courseId);
}

function updateCourseProgress(courseId) {
    let totalLessons = 0;
    let completedLessons = 0;
    
    const course = courseData[courseId];
    if (!course) return;
    
    Object.keys(course.modules).forEach(moduleId => {
        const module = course.modules[moduleId];
        module.lessons.forEach((lesson, lessonIndex) => {
            totalLessons++;
            const progressKey = `progress_${courseId}_${moduleId}_${lesson.id}`;
            if (localStorage.getItem(progressKey) === 'completed') {
                completedLessons++;
            }
        });
    });
    
    const progressPercentage = Math.round((completedLessons / totalLessons) * 100);
    localStorage.setItem(`course_progress_${courseId}`, progressPercentage);
    
    return progressPercentage;
}

// =================================================================
// EXPORTAR FUNCIONES GLOBALES
// =================================================================
window.toggleTeacherPanel = toggleTeacherPanel;
window.openCourse = openCourse;
window.closeModal = closeModal;
window.showStats = showStats;
window.manageAssignments = manageAssignments;
window.gradebook = gradebook;
window.announcements = announcements;
window.manageStudents = manageStudents;
window.openUploadModal = openUploadModal;
window.closeUploadModal = closeUploadModal;
window.updateModules = updateModules;
window.updateLessons = updateLessons;
window.openResource = openResource;
window.showNotification = showNotification;
window.updateLessonProgress = updateLessonProgress;

console.log('📚 La Web del Profe - Sistema cargado completamente');
console.log(`Versión: ${APP_CONFIG.version} | Año: ${APP_CONFIG.year}`);