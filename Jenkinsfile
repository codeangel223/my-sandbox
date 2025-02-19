pipeline {
    agent any

    stages {
        stage('Recuperation du projet') {
            steps {
                git(
                    branch: 'main',
                    credentialsId: '83f74c11-0512-464f-8f76-76d95cfb89dc',
                    url: 'https://github.com/codeangel223/my-sandbox.git'
                )
            }
        }

        stage('Installation des dependencies') {
            steps {
                script {
                    bat 'npm install'
                }
            }
        }

        stage('Build') {
            steps {
                script {
                    bat 'npm run build'
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    bat 'npm run deploy'
                }
            }
        }
    }

    post {
        success {
            emailext subject: '✅ Déploiement réussi',
                body: '''Le build du jour a été un succès 🙏.
                📌 URL: [Sandbox](https://codeangel223.github.io/sandbox)''',
                to: 'contact@codeangel.pro'
        }
        failure {
            emailext subject: '❌ Échec du déploiement',
                body: '''Le build du jour n'a pas pu aboutir 😢.
                Veuillez consulter les logs Jenkins.''',
                to: 'contact@codeangel.pro'
        }
    }
}
